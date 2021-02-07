//压缩相关    zip  rar  tar  tar.gz  bz2
var  fs = require("fs");
var zlib = require("zlib");
// fs1.txt 压缩成gz包
fs.createReadStream("./fs1.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("fs1.txt.gz"));

console.log("文件压缩完成");