/**
 * 文件说明: 测试jsx
 * 详细描述:
 * 创建者: hxb
 * 创建时间: 2016/8/25
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
                <span>
                    hello world
                </span>
            </div>
        );
    }

    componentDidMount(){
        this.actions.testAction();
    }
}

function mapStateToProps(state) {
    return {
        testStore:state.testStore
    };
}
export default connect(mapStateToProps)(Test);
