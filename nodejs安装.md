## 安装区局模块
    npm install -g express
    npm install -g express-generator //是express快速生成器，相当于express骨架
    npm install -g supervisor //保证实现实现页面的实时刷新
        用法 "script":{
            "start":"node ./bin/www"   预编译不会重新编译
        } 
        =>
        改为 "script":{
            "start":"supervisor ./bin/www"
        }
    
## 怎么实现断开ssh服务器以后还能一直启动
    安装PM2:npm install -g pm2
    启动程序： pm2 start<app_name|id|all>
    列举进程： pm2 list
    退出程序： pm2 stop<app_name|id|all>
    重启应用： pm2 restart
    程序信息： pm2 describe id|all
    监控：  pm2 monit
    实时集中log处理：pm2 logs
    API:pm2 web(端口9615)
## 创建项目 express -e blog && cd blog   -e是创建ejs模板命令
    app.js里设置
        app.set("view",path.join(__dirname,'views'));
        app.set("view engine","htm");
        app.engine(".htm",require('ejs')._express);
## 安装模块
    express-session
    connect-mongo
    mongose
## 路由设置
### routers.js
        module.export=function(app){  一个模块只能导出一个变量
            首页
            app.get('/',function(req,res,next){
                res.send('');
                res.render('index',{title:'我是xxx'}) 对应文件中的<%= title %>
            })
            登录页
            app.get('/login',function(req,res,next){
                res.send('请登录')
                res.render('login',{title:'登录'})
            })；
            注册页
            app.get('./reg',function(req,res,next){
                res.send('注册')；
                res.render('reg',{title:'注册'})
            })；
            退出页
            app.get('./logout',function(req,res,next){
                res.send('退出');
                res.render('lohout',{title:'退出'})
            })
        }
### app.js里面设置
#### 添加routes模块路径 var routes=require('./xxx/xxx')
#### 接收参数   routes(app); 
#### 引入公共头部或者底部  < %includes common/header.htm %> 
                        < %includes common/footer.htm %>
### 首页设置index.htm页面
    <body>
        <div class="nav">
            <a href="/">首页</a> 
            <a href="/login">登录</a> 
            <a href="/ reg">注册</a> 
        </div>
    </body>
## 启动mongodb服务
    mongod -dbpath="F:\node.js\data"  数据库的路径 你设置的数据库的资质
        