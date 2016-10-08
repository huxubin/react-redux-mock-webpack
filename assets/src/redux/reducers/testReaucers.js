/**
 * 文件说明: 测试store
 * 详细描述:
 * 创建者: hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import * as ActionsType from '../utils/actionTypes';
import HttpClient from '../utils/httpClient';

/*
 * test
 * */
export function testStore(state = [], action) {
    switch (action.type) {

        case ActionsType.GET_TEST_DATA:
            return action.store;

        // Object.assign() 新建一个副本
        // 第一个参数设置为空，否则它会改变第一个参数的值
        // return Object.assign({},{data:data});

        // default(未知action)时，返回state(旧的数据)
        default:
            return state;
    }
}