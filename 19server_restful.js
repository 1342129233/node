let express = require('express');
let app = express();
let fs = require("fs");

app.get("/:id", function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
        data = JSON.parse(data);
        let user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user))
    });
})

let server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})