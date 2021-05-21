let express = require('express');
let app = express();
let fs = require("fs")

let id = 2;

app.get('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + id];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

