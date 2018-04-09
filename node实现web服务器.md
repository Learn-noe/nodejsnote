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
    