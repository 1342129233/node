// 静态文件
// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
// 你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写
let express = require('express');
let app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World');
})

let server = app.listen(3000, function() {
    let host = server.address().address
    let port = server.address().port
    
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})