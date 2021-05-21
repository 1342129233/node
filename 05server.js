// Buffer(缓冲区)与字符编码

// 创建一个长度为 10 且用 0 填充的 buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10  且哟过 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1);

// 实例

const buf = Buffer.alloc(256);
let len = buf.write("www.runoob.com")

console.log("输入字节数:" + len );