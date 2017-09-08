/**
 * 文件说明: route
 * 详细描述:
 * 创建者: huxb
 * 创建时间: 2017/09/05
 * 变更记录:
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var ReactDOMServer = require('react-dom/server');
var assetsPath = path.resolve(__dirname, '../assets/src');

router.get('/', (req, res, next) => {
    if (!__DEVELOPMENT__) {
        var Test = require(path.join(assetsPath, 'test/test.entry'));
        var html = ReactDOMServer.renderToString(Test);
        res.locals.body = html;
    }
    res.render('test');
});
module.exports = router;
