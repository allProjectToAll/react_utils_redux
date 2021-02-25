import React, { Component } from 'react';
import * as actions from './actions'

class ReduxCom extends Component {
    state = {  }

    increment = ()=>{
        const number = this.select.value*1;
        this.props.store.dispatch(actions.increment(number))
    }
    encrement = ()=>{
        const number = this.select.value*1;
        this.props.store.dispatch(actions.decrement(number))
    }
    incrementIfOdd = ()=>{
        const number = this.select.value*1;
        const count = this.props.store.getState();
        if(count%2 === 1){
            this.props.store.dispatch(actions.increment(number))
        }
    }
    incrementAsync = ()=>{
        const number = this.select.value*1;
        setTimeout(()=>{
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }



    render() { 
        const count = this.props.store.getState();
        console.log(count,888999);

        return ( 
            <div>
                <p>click { count } times </p>

                <div>
                    <select ref={select=>this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.encrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>奇数加偶数不加</button>&nbsp;
                    <button onClick={this.incrementAsync}>异步加</button>&nbsp;
                </div>
                
            </div>
         );
    }
}
 
export default ReduxCom;