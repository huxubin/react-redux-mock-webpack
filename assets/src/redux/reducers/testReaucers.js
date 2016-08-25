/**
 * 文件说明: 测试store
 * 详细描述:
 * 创建者: hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import * as ActionsType from '../utils/actionsTypes';
import HttpClient from '../utils/httpClient';

/*
 * test
 * */
export function testStore(state = [], action) {
    switch (action.type) {
        case ActionsType.GET_TEST_DATA:
            return action.store;
        default:
            return state;
    }
}
