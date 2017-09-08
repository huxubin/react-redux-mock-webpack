/**
 * 文件说明:根reducer
 * 详细描述:
 * 创建者: hxb
 * 创建时间: 2017/09/05
 * 变更记录:
 */
import {combineReducers} from 'redux';
import {testStore} from './testReaucers';

const rootReducer = combineReducers({
    testStore
});
export default rootReducer;
