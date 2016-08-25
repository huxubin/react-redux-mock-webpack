/**
 * 文件说明: 测试Actions
 * 详细描述:
 * 创建者:   hxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import * as Types from '../utils/actionTypes.js';
import * as testService from '../../../../service/testService.js';

// test
export function testAction(data) {
    return (dispatch) => {
        testService.getTestData(data).then((res)=>{
            dispatch({
                type: Types.GET_TEST_DATA,
                store: res.data
            });
        },(err)=> {
            dispatch({
                type: Types.ERROR_MESSAGE
            });
        })
    }
}
