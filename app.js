var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//加载数据库模块
var mongoose = require('mongoose');
//加载session模块
var session = require('express-session');
//加载链接数据库的模块
var MongoStore = require('connect-mongo')(session); 

var routes = require('./config/routes');
var config = require('./config/config');


var app = express();    

//链接到数据库的地址
mongoose.connect('mongodb://localhost/blogOne');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set( 'view engine', 'htm');
app.engine( '.htm', require( 'ejs').__express );
 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设置session
app.use(session({
    secret: "45454",
    //存取数据库对象的内容
    store: new MongoStore({
		cookieSecret: 'jdghjf', //随机名称
		db: 'blogOne',  //数据库的名称
		host: 'localhost'  //数据库地址
	})
}));
 
routes(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
