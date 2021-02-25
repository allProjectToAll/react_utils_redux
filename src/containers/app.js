/**
 * 管理container内容的组件,容器组建包含ui组件
 */
// import React from 'react';
import { increment, decrement, incrementAsync } from '../components/react-redux/actions'
import {connect} from 'react-redux'
import reactRedux from '../components/react-redux/index'


export default  connect(
    state=>({count:state}),
    { increment, decrement, incrementAsync }
)(reactRedux);