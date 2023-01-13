let current_path = __dirname.replace('mylogger_custom', '').replace('node_modules', '')
exports.loggerPath = current_path.substring(0, current_path.length-1);