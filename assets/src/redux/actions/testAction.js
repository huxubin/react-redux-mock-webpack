/**
 * 文件说明: 测试Actions
 * 详细描述:
 * 创建者:   huxb
 * 创建时间: 2016/8/25
 * 变更记录:
 */
import * as Types from '../utils/actionTypes.js';
import * as testService from '../../../../service/testService.js';

// test
export function testAction(data) {
    return (dispatch) => {
        testService.getTestData(data).then((res)=>{
            // action获取数据,是store的唯一数据来源
            // 通过dispatch将action传给store
            // 约定：action中要使用type字段描述要执行的动作
            // 尽量减少在action中传递的数据

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
