const event = require('./event')
const glob = require("glob");
const fs = require('fs');
const { loggerPath } = require('../global');
const insertLine = require('insert-line')

let date = new Date();
let currentDate = `${date.getUTCDate()}-${date.getMonth()}-${date.getUTCFullYear()}`

const filePath = loggerPath + `logger/${currentDate}_logger.txt`

event.on('info', (message) => {
    glob('logger' + '/**/*', (err, files) => {
        if (err) {
            throw Error("error occured while logging info", err)
        }
        if (files.length === 0) {
            fs.appendFile(filePath, message, function (err) {
                if (err) throw err;
            });
        } else {
            files.forEach(file => {
                if (file.includes(currentDate)) {
                    insertLine(filePath).appendSync(`${message}`)
                }
            })
        }
    });
})

exports.info = (message) => {
    event.emit('info', message)
}