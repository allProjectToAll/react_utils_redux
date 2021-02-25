/**
 * 包含所有的action creators====>function
 * 同步的action都返回对象，异步的都返回函数
 */
import { INCREMENT, DECREMENT } from './action_types'

export const increment = (number) =>{
    return {type:INCREMENT, data:number}
}

export const decrement = (number) =>{
    return {type:DECREMENT, data:number}
}
export const incrementAsync = (number) => {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}