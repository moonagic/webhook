var fs = require('fs')

function log(argument, _logFile) {
    var logFile = 'log'
    if (_logFile) {
        logFile = _logFile
    }

    if (!fs.existsSync('./log/')) {
        fs.mkdirSync('./log/')
    }

    fs.appendFile('./log/' + logFile, '[' + time() + '] ' + argument + '\n',  (err)=> {
        if(!err) {
            console.log('Append complete.');
        }
    });
}

function time() {
    var date = new Date();
    var result = date.getFullYear() + '-';
    result += date.getMonth() + '-';
    result += date.getDate() + ' ';
    result += date.getHours() + ':';
    result += date.getMinutes() + ':';
    result += date.getSeconds();
    return result;
}

exports.log = log;
exports.time = time;