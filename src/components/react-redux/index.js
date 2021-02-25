import React, { Component } from 'react';

import PropTypes from 'prop-types'


export default class ReduxCom extends Component {
    state = {  }

    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired,
        // arr:PropTypes.array.isRequired,数组
    }

    increment = ()=>{
        const number = this.select.value*1;
        this.props.increment(number)
    }
    encrement = ()=>{
        const number = this.select.value*1;
        this.props.decrement(number)
    }
    incrementIfOdd = ()=>{
        const number = this.select.value*1;
        const count = this.props.count;
        if(count%2 === 1){
            this.props.increment(number)
        }
    }
    incrementAsync = ()=>{
        const number = this.select.value*1;
        setTimeout(()=>{
            this.props.increment(number)
        },1000)
    }



    render() { 
        const {count} = this.props;
        console.log(this.props,888999);

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

 
