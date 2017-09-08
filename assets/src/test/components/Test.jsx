/**
 * 文件说明: 测试jsx
 * 详细描述:
 * 创建者: huxb
 * 创建时间: 2017/09/05
 * 变更记录:
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as testAction from '../../redux/actions/testAction.js';
import './../style/test.less';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(Object.assign({},testAction), props.dispatch);
    }

    render(){
        return (
            <div>
                {this.getTestData()}
            </div>
        );
    }

    componentDidMount(){
        this.actions.testAction();
    }

    getTestData(){
        let testStore = this.props.testStore||{};
        let testData = testStore.datas||[];
        return testData.map(function(item,index){
            return <img key={index} src={item.bookcover} style={{'width':'200px','marginLeft':'20px'}}/>
        });
    }
}

function mapStateToProps(state) {
    return {
        testStore:state.testStore
    };
}
export default connect(mapStateToProps)(Test);
