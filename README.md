# Webhooks

[利用Github的Webhook功能进行持续集成](https://moonagic.com/continuous-integration-with-github-webhook/)

```JavaScript
// 在Webhooks中设定的secret
var secret = ''
// 在Webhooks中设定的Payload URL
var url = ''
...
// 监听地址端口
}).listen(6606, '127.0.0.1');
```

## 开启服务
```
npm install
node index.js
```

## 简单的systemd启动服务
```
[Unit]
Description=GithubWebhookService

[Service]
WorkingDirectory=path/to/webhooks
ExecStart=/usr/bin/node path/to/index.js

[Install]
WantedBy=multi-user.target
```
