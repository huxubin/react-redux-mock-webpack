/**
 * 文件说明: 测试entry
 * 详细描述:
 * 创建者:   hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ConfigureStore from '../redux/utils/configureStore';
import Test from './components/Test.jsx';

if (__CLIENT__) {
    const store = ConfigureStore(undefined, window.__INITIALSTATE__);
    const reactClass = (<Provider store={store}><Test/></Provider>);
    const rootElement = document.getElementById('app');
    ReactDOM.render(reactClass, rootElement);
}

if (__SERVER__) {
    module.exports = Test;
}
