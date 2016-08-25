/**
 * 文件说明: 路径拦截器
 * 详细描述: 添加接口请求baseUrl
 * 创建者: hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import Config from '../../../../config';
let Cookies = require('cookies-js');

export default {
    request: (config) => {

        //获取token和uid,调试模式下获取测试帐号
        if (!config.headers) {
            config.headers = {};
        }
        const tfToken = Cookies('tf-token');
        const tfUid = Cookies('tf-uid');

        // 如果headers中已有tf-token和tf-uid,则不再覆盖
        if(tfToken && tfUid && !config.headers['tf-token'] && !config.headers['tf-uid']){
            Object.assign(config.headers, {
                'tf-token': tfToken,
                'tf-uid': tfUid
            });
        }
        return config;
    }
};