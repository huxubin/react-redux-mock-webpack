/**
 * 文件说明: mock数据
 * 详细描述:
 * 创建者  : hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
var express = require('express');
var router = express.Router();
import Mock from 'mockjs';

router.post(/contact\/list/, (req, res, next) => {
    "use strict";

    // 开启Mock
    const data = Mock.mock({
        'code': 0,
        'data': {
            'datas': [{
                'id': 1,
                'name': 'hxb',
                'bookcover': 'http://img1.timeface.cn/avator/7fdd0a5b1fc2856414f796a8c9f72ee0.jpg'
            },{
                'id': 2,
                'name': 'hp',
                'bookcover': 'http://img1.timeface.cn/avator/7fdd0a5b1fc2856414f796a8c9f72ee0.jpg'
            }]
        }
    });
    res.json(data);
});

module.exports = router;
