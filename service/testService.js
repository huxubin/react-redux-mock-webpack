/**
 * 文件说明: 测试service
 * 详细描述:
 * 创建者: hxb
 * 创建时间: 2017/09/05
 * 变更记录:
 */
import Q from 'q';
import HttpClient from '../assets/src/redux/utils/httpClient';

/*
 * test
 * */
export function getTestData(data) {
    let defer = Q.defer();
    HttpClient.post('/contact/list',data)
        .then((res) =>{
            defer.resolve(res);
        }, (err)=> {
            defer.reject(err);
        });
    return defer.promise;
}
