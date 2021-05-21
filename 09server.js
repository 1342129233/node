let http = require('http');
let url = require('url');
let util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});

    // 解析 url 参数
    let params = url.parse(req.url, true).query;
    res.write('网站名:' + params.name);
    res.write("\n");
    res.write('网站url:' + params.url);
    res.end()
    // 第二种写法 (获取详细信息)
    // res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
