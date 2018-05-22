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
    result += (date.getMonth() + 1 > 9 ? '' : '0') + (date.getMonth() + 1) + '-';
    result += (date.getDate() > 9 ? '' : '0') + date.getDate() + ' ';
    result += (date.getHours() > 9 ? '' : '0') + date.getHours() + ':';
    result += (date.getMinutes() > 9 ? '' : '0') + date.getMinutes() + ':';
    result += (date.getSeconds() > 9 ? '' : '0') + date.getSeconds();
    return result;
}

exports.log = log;
exports.time = time;
