const { info } = require('./dist/info')
const { warning } = require('./dist/warning')
exports.logger = {
    info: info,
    warning: warning
}
