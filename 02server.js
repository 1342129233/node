// 回调函数

const fs = require("fs");

// 阻塞代码实例
// let data = fs.readFileSync("./txt/input.txt")

// 非阻塞代码实例
fs.readFile("./txt/input.txt", function(err, data){
    if(err) return console.log(err);
    console.log(data.toString())
})

console.log("程序执行结束")