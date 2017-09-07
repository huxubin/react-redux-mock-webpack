/**
 * 文件说明: 依赖加载中间件
 * 详细描述:
 * 创建者: huxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
var path = require('path');
var fs = require('fs');

module.exports = function (app) {
    // 修改render方法
    app._render = app.render;
    app.render = function(name,options,callback){
        if(app.get('debug')){
            // 匹配同名目录下的同名文件
            const filename = path.resolve(__dirname, '../', app.get('views'), name, name + '.' + app.get('view engine'));
            const injectStyle = (err, html) => {
                // 注入style
                var stylesheet = '<link rel="stylesheet" href="[name].entry.css">'.replace('[name]',name);
                callback.call(this, err, html.replace('</head>', stylesheet + '</head>'));
            };
            if(fs.existsSync(filename)){
                // 同名文件存在,渲染该文件
                if(__DEVELOPMENT__){
                    webpackIsomorphicTools.refresh();
                }
                var assets = webpackIsomorphicTools.assets();
                var scripts = [];
                scripts.push(assets.javascript['commons']);
                scripts.push(assets.javascript[name + '.entry']);
                Object.assign(options, {
                    assets: {scripts: scripts}
                });
                app._render(filename, options, callback);
            } else {
                // 同名文件不存在,按原有逻辑渲染
                app._render(name, options, callback);
            }
        }else{
            app._render(name, options, callback);
        }
    };
};
