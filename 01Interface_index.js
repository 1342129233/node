let express = require('express');
let mysql = require('mysql');

let app = express();

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'WANGXIN'
})

// mysql 应用
connection.connect();
let sql = 'SELECT * FROM user';
let json_user = "";
connection.query(sql, function(err, result) {
    if(err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    json_user = result
    // console.log(result);
})
connection.end();


app.get('/user', function(req, res) {
    let code = {
        code: 'E1',
        data: json_user
    }
    res.send(code);
})
app.get('/', function(req, res) {
    res.send("Hello World");
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})