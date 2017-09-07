/**
 * 文件说明: 配置文件
 * 详细描述:
 * 创建者: huxb
 * 创建时间: 2016/8/19
 * 变更记录:
 */
module.exports = {
    // 接口代理配置
    API_PROXY_CONFIG: {
        DEBUG: true,
        path: '/tf',
        host: 'http://'+WEBSITE_HOST,
        changeOrigin: true,
        websockets: false,
        // 本地存储键值
        STORAGE_KEY: {
            TOKEN: 'tf-token',
            UID: 'tf-uid'
        }
    },
    //服务端接口服务器配置
    API_SERVER: {
        host: 'http://'+ WEBSITE_HOST,
        path: '/tf'
    },

    //默认TDK
    TDK: {
        title: '照片书',
        description: '',
        keywords: ''
    },

    // MOCK开启
    NODE_ENV_MOCK: true,

    // resetCss 标签和地址
    RESE_CSS_URL:'<link href="//cdn.bootcss.com/meyer-reset/2.0/reset.min.css" rel="stylesheet">'

};
