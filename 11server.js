const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer(function(request, response) {
    // 解析请求，包括文件名
    let pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for" + pathname + "received.");

    // 从文件系统中读区请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if(err) {
            console.log(err);
            // HTTP 状态吗： 404: NOT FOUND
            // Content Type: text/html
            response.writeHead(404, {'Content-Type': 'text/html; charset=utf8'});
        } else {
            // HTTP 状态吗：200 : OK
            // Content Type: text/html
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

            // 响应文件内容
            response.write(data.toString());
        }
        // 发送响应式
        response.end();
    });
}).listen(3000);