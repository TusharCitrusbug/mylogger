const event = require('./event')

exports.warning = event.on('warning', (message) => {
    console.log("warning in successfuilly", message);
})