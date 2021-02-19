//node 处理递归的方式 查找文件和文件夹
var fs = require("fs");//加载fs模块
var path = require("path");//定位路径——path模块
var filePath = path.resolve("./js");
//调用文件 遍历方法  遍历当前路径下的所有文件以及文件夹
fileDisplay(filePath);
//函数方法
function fileDisplay(filePath){
  //读取当前文件路径  返回当前路径下的所有文件列表
  fs.readdir(filePath,function(err,files){
  if(err){
    // console.log(err);
    //console模块
    console.warn(err);
  }else{
    //遍历读取到文件列表
    files.forEach(function(filename){
      //获取当前文件的绝对路径
      var filedir = path.join(filePath,filename);
      //根据文件路径 获取文件信息 返回一个fs.stat的对象
      //fs.exists fs.access fs.stat
      fs.stat(filedir,function(err,stats){
        if(err){
          console.log("获取们见stat状态失败");
        }else{
          var isFile = stats.isFile();//判断当前路径是文件还是文件夹
          var  isDir = stats.isDirectory();//是不是文件夹
          if(isFile){
            console.log(filedir);
            //读取文件内容
            var content = fs.readFileSync(filedir,"utf-8");
            console.log(content);
          }
          if(isDir){
            fileDisplay(filedir);//如果是文件夹继续遍历文件夹下的文件
          }
        }
      })
    })
  }
  })
}