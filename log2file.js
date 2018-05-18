var fs = require('fs')

function log(argument, _logFile) {
    var logFile = 'log'
    if (_logFile) {
        logFile = _logFile
    }

    fs.appendFile(logFile, '[' + time() + '] ' + argument + '\n',  (err)=> {
        if(!err) {
            console.log('Append complete.');
        }
    });
}

function time() {
    var date = new Date();
    var result = data.getFullYear() + '-';
    result += data.getMonth() + '-';
    result += data.getDate() + ' ';
    result += data.getHours() + ':';
    result += data.getMinutes() + ':';
    result += data.getSeconds();
    return result;
}

exports.log = log;
exports.time = time;