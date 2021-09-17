import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Test3 extends Component {
    render() {
        {
            //props对象为空  当通过路由跳转到该页面时 props 才会有值
            console.log(this.props)
        }
        return (
            <div>
                test3
                <button onClick={()=>{
                    this.props.history.goBack();
                }}>返回</button>
            </div>
        )
    }
}
//通过 withRouter 包裹组件 使 props 有相应的值
export default withRouter(Test3);