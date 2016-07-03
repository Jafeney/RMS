var express = require('express'),
    http = require('http'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    async = require('async'),
    routes = require('./routes/routes');

var app = express();
app.set('port', 3000); //设置监听端口位3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 根目录设置
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "/public/html/users/index.min.html");
// });

// 创建http服务器
var server = http.createServer(app);
server.listen(app.get('port'));

// 启动服务，监听端口
server.on('listening', function() {
    console.log('--- Server listening on port: ' + app.get('port') + '---');
});

// 错误监听
server.on('error', function(error) {
    switch (error.code) {
        case 'EACCES':
            console.error(bind + '需要权限许可');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + '端口已被赞用');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

// 加载路由
async.waterfall([
    function(callback) {
        routes(app);
        callback(null);
    },
    function() {
        app.use(function(req, res, next) {
            var err = new Error('Not Found');
            console.log(1111);
            err.status = 404;
            next(err);
        });

        if (app.get('env') === 'development') {
            app.use(function(err, req, res, next) {
                res.status(err.status || 500);
                res.render('404/error', {
                    message: err.message,
                    error: err
                });
            });
        }

        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            console.log(2222);
            res.render('404/error', {
                message: err.message,
                error: {}
            });
        });
    }
]);

// routes(app);     //坑点：若async版本"^2.0.0-rc.2"不能这样使用waterfall
