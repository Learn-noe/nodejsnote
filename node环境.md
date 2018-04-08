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
                
# 模块  
## 一个文件就是一个模块
# nodejs事件
## var event=require('event') node事件库
### var myEmitter=new event.EventEmitter();
    var util=require('util'); node工具库  代表继承  和extends用法相同  可以绑定事件
    var persion=function (name){
        thisnname=name;
    }
    util.inherits(Person,event.EventEmitter);
    var xiaoming=new Person('xioaming');
    var xiaohua=new Person(xiaohua);
    var xiaoli=new Person(xiaoli);
    var persion=[xiaohua,xiaoli,xiaoli]
    person.forEach(function(person){
        person.on('speak',function(message){
            console.log(person.name+"said:"+message);
        })
    })
    xiaoming.emit('speak','hi');
    xiaohua.emit('speak','i want a curry')
    myEmitter.on('someEvent',function(message){
        console.log(message);
    })
    myEmitter.emit('someEvent','the event was emitted')
    
    
# node 同步 和异步
## 同步   就是从上到下按照顺序一步步执行  在执行js的时候是单线程的
            事件队列  主线程  先执行  在读取副线程    回调  fs.readFile('wenjian',"utf-8",function(arr,data){
        console.log(data);
    })
# node实现web服务器
## var http=require('http');
    var server=http.createServer(function(request,response){
        console.log(Resquest receive);
        response.writeHead(200,{'Content':'text/plain']}); //状态码参数 设置头信息  类型 
        response.end()
    })
    server.listen(3000,'127.0.0.1');
    console.log(server start on localhost part 3000);
    
     var http=require('http');
        var onRequest=function(request,response){
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
    
         var http=require('http');
        var onRequest=function(request,response){
        console.log(Resquest receive);
        response.writeHead(200,{'Content':'text/html']}); text/plain 输出纯文本 //状态码参数 设置头信息  类型
        var myReadStrem=fs.createReadStorm(__dirname+'/index.html','utf-8'); __dirname 当前目录 
        myReadStream.pipe(response)
        var htmlFile='<!DOCTYPE html>' +
            '<html lang="en">' +

            '<head>' +
                '<meta charset="UTF-8">' +
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
                '<title>Document</title>' +
            '</head>' +

            '<body>' +

            '</body>' +

            '</html>'
        response.end(htmlFile    );//转为字符串Json.parse(JSON.stringify(myObj)) //把字符串转换回来
    }
    server.listen(3000,'127.0.0.1');
    console.log(server start on localhost part 3000)
    
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
    
# 路由
## 获取路由信息 
### 第一种方法
    //路由页面加载所需模块
    var http=require('http');
    var url=require('url');
    var fs=require('fs');
    
    var host='127.0.0.1';
    var post=8080;
    
    http.createServer(function(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log('Request for'+pathname+'received');
        function showPaper(path,status){
            var content=fs.readFileSync(path);
            res.writeHead(status,{'Content-Type':'text/html;charset=utf-8'});
            res.write(content);
            res.send();
        }
        switch(pathname){
            //首页
            case '/':
            case 'home':
                showPaper('./view/home.html',200);
                break;
            //about页
            case '/about':
                showPaper('./view/about.html',200);
                break;
            //404页面
            default:
                showPaper('./view/404.html',404);
                break;
        }
    }).listen(post,host);
    
    
### 第二种方法
    var http = require('http');
        http.createServer(function (req, res) {

            var buf_list = [];
            var len=0;
            req.on("data",function(chunk){
                buf_list.push(chunk);
                len += chunk.length;
            })
            req.on("end", function(){
                req.body = Buffer.concat(buf_list, len).toString();
                if(req.url != '/favicon.ico') {
                 iroute.route(req,res);
                } 
            })
        }).listen(8124);
    
    var express = require('express');
      var app = express();
      var iroute = require("iroute");
      var route_array = [
        ["get:/hello/world",function(req,res){res.end('hello world')}],
      ]
      app.use(iroute.connect(route_array));
      app.listen(3000);
      
### 第三种方法
    var express = require('express')
 
     , app = express.createServer(); 

    var users = [{ name: 'www.csser.com' }];

    app.all('/user/:id/:op?', function(req, res, next){

     req.user = users[req.params.id];

     if (req.user) {

      next();

     } else {

      next(new Error('cannot find user ' + req.params.id));

     }

    });

    app.get('/user/:id', function(req, res){

     res.send('viewing ' + req.user.name);

    });

    app.get('/user/:id/edit', function(req, res){

     res.send('editing ' + req.user.name);

    }); 

    app.put('/user/:id', function(req, res){

     res.send('updating ' + req.user.name);

    });

    app.get('*', function(req, res){

     res.send('what???', 404);

    });
    app.listen(3000); 

## https://www.cnblogs.com/mibear/p/nodejs.html?utm_source=tuicool&utm_medium=referral
## https://blog.csdn.net/u011781521/article/details/53519225
