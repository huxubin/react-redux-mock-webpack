const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
var FileStreamRotator = require('file-stream-rotator');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const fs = require('fs');
const routes = require('./routes');
const extendRender = require('./utils/extendRender');
const config = require('./config');
const app = express();

// log
var logDirectory = __dirname + '/logs';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});
app.use(logger('combined', {stream: accessLogStream}));

// 设置调试模式
app.set('debug', app.get('env') === 'development');

// 初始化 state
app.locals.initialState = {};
app.locals.assets = {};
app.locals.body = '';

// 设置默认的TDK
app.locals.title = config.TDK.title;

// 全局常量
app.locals.RESE_CSS_URL = config.RESE_CSS_URL;

// 模板引擎设置
if(app.get('debug')) {
    app.set('views', path.join(__dirname, 'assets/src'));
}else {
    app.set('views', path.join(__dirname, 'assets/dist'));
}
app.set('view engine','html');
app.engine('html', require('ejs').renderFile);

// 开启代理
if (app.get('debug')) {
    // 调试环境开启接口代理
    var proxyConfig = config.API_PROXY_CONFIG;
    // 配置接口代理路径
    var context = proxyConfig.path;
    // 配置代理选项
    var options = {
        target: proxyConfig.host,
        changeOrigin: proxyConfig.changeOrigin,
        pathRewrite: proxyConfig.pathRewrite
    };

    if(config.NODE_ENV_MOCK){  //开启mock数据
        app.use(require('./middleware/mockMiddleware'));
    }

    // 创建代理中间件
    var proxy = require('http-proxy-middleware')(context,options);
    app.use(proxy);
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
if (!app.get('debug')) {
    app.use('/static', express.static(path.join(__dirname, 'assets/dist')));
}
app.use(compression());

// 扩展extend方法
extendRender(app);
// 路由处理
app.use('/', routes);

// 404错误处理
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 开发环境，500错误处理和错误堆栈跟踪
// if (app.get('env') === 'development') {
//     app.use((err, req, res, next) => {
//         res.status(err.status || 500).send(err.toString());
//     });
// }

app.use((err,req,res,next) => {
    res.status(err.status || 500).send(err.toString());
});

// 启动express服务
let PORT = parseInt(process.env.PORT || 9099);
try {
    //if (module.parent) {
        app.listen(PORT,()=>{
            console.log('启动服务端口号:',PORT);
        });
    //}
}catch(err){
    console.log('启动错误：',err);
}
