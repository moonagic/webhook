# Webhooks, 一个简单的webhook后台

[利用Github的Webhook功能进行持续集成](https://moonagic.com/continuous-integration-with-github-webhook/)

## Deprecated
我在自己的服务器上使用[GoWebhook](https://github.com/moonagic/GoWebhook)替代这个项目.

## 配置
```JavaScript
// 在Webhooks中设定的secret
var secret = ''
// 在Webhooks中设定的Payload URL
var url = ''
...
// 监听地址端口
}).listen(6606, '127.0.0.1');
```
自己新建一个用于部署的shell脚本,比如`auto_build.sh`.  
在任务中执行.

## 开启服务
```
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
