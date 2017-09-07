/**
 * 文件说明: mock data
 * 详细描述:
 * 创建者  : huxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
var express = require('express');
var router = express.Router();
import Mock from 'mockjs';

router.post(/contact\/list/,(req,res,next) => {
    "use strict";
    const data = Mock.mock({
        'code': 0,
        'data': {
            'datas': [{
                'id':1,
                'name':'huxb',
                'bookcover': 'http://img1.timeface.cn/avator/7fdd0a5b1fc2856414f796a8c9f72ee0.jpg'
            },{
                'id':2,
                'name':'hep',
                'bookcover':'http://img1.timeface.cn/avator/7fdd0a5b1fc2856414f796a8c9f72ee0.jpg'
            }]
        }
    });
    res.json(data);
});

module.exports = router;
