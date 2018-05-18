var http = require('http')
var crypto = require('crypto')
var exec = require('child_process').exec
var log = require('./log2file.js').log
var time = require('./log2file.js').time

// 在Webhooks中设定的secret
var secret = ''
// 在Webhooks中设定的Payload URL
var url = ''
// 当前执行状态
var running = false
// 是否有等待中的任务
var queue = false;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type':'application/json'});
    response.end();

    if (request.headers['x-github-event'] && request.headers['x-github-event'] === 'push') {
        log('push');

        request.on('data', function(chunk) {
            var Signature = request.headers['x-hub-signature'];
            //log(chunk.toString()); chunk中存储了payload的数据,如果需要可以拿出来做更精确的处理.比如部署触发该次push的commit的代码
            if (verify(Signature, sign(secret, chunk.toString())) && verify(url, request.url)) {
                log('verify');
                queue = true;
                checkoutQueue();
            } else {
                log('verify faild');
            }
        });
    }

}).listen(6606, '127.0.0.1');

function sign(secret, data) {
    return 'sha1=' + crypto.createHmac('sha1', secret).update(data).digest('hex');
}

function verify(data0, data1) {
    return (data0 == data1);
}

function runCommand() {
    if (running) {
        log('queue')
        return;
    }
    running = true;
    exec("./auto_build.sh", function(err,stdout,stderr){
        if(err) {
            log("stdout:"+stdout, time() + 'error.log');
        } else {
            log('error:'+stderr, time() + 'finish.log');
        }
        running = false;
    });
}

function checkoutQueue() {
    if (queue) {
        runCommand();
    }
}

