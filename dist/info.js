const event = require('./event')

exports.info = event.on('info', (message) => {
    console.log("info in successfuilly", message);
})