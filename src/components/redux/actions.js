/**
 * 包含所有的action creators====>function
 */
import { INCREMENT, DECREMENT } from './action_types'

export const increment = (number) =>{
    return {type:INCREMENT, data:number}
}

export const decrement = (number) =>{
    return {type:DECREMENT, data:number}
}