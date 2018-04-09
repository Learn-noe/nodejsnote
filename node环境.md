## nodejs是基于chrome V8引擎的js语言 高性能异步的前端web服务器 事件机制 异步IO
### 高薪能 ，解析快 基于v8  事件驱动 非阻塞 
## node全局对象
### __dirname 输出目录  setInterval  setTimeout  __firename   require  export
## 函数表达式 
### 正常的  function say(){console.log('hi')}  say();
### 匿名函数 var say=function(){console.log('hello')} say();
### 回掉函数  function callFunction(fun){
                fun(name);
                } ;
                function sayhello=function(name){
                    console.log(name+'hello')
                };
                callFunction(sayhello,'123456')
                callFunction (function(name){
                    console.log(name+'')
                },'161654489')
    
# node 同步 和异步
## 同步   就是从上到下按照顺序一步步执行  在执行js的时候是单线程的
            事件队列  主线程  先执行  在读取副线程    回调  fs.readFile('wenjian',"utf-8",function(arr,data){
        console.log(data);
    })

# 代码重构
    var http=require('http');
    var fs =require('fs');
    function starServer(){
         var onRequest=function(request,response){
         if(equest.url==='/'||)
        console.log(Resquest receive);
        response.writeHead(200,{'Content':'application/json']}); //状态码参数 设置头信息  类型 
        var myObj={
            name:'122323',
            job:'65622',
            age:25
        }
        response.end(JSON.stringify(myObj));//转为字符串Json.parse(JSON.stringify(myObj)) //把字符串转换回来
    }
    server.listen(3000,'127.0.0.1');
    console.log(server start on localhost part 3000)
    }
    export.startServer=starServer;
    


## https://www.cnblogs.com/mibear/p/nodejs.html?utm_source=tuicool&utm_medium=referral
## https://blog.csdn.net/u011781521/article/details/53519225
