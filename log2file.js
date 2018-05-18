var fs = require('fs')

function log(argument, _logFile) {
    var logFile = 'log'
    if (_logFile) {
        logFile = _logFile
    }

    fs.appendFile(logFile, time() + argument + '\n',  (err)=> {
        if(!err) {
            console.log('Append complete.');
        }
    });
}

function time() {
    return '[' + new Date().toString() + '] ';
}

exports.log = log;
exports.time = time;