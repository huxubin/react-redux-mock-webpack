/**
 * 文件说明: 配置reducer
 * 详细描述:
 * 创建者: huxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

module.exports = function (rootReducer = RootReducer, initialState = {}) {

	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(thunk)
	));
	return store;
};