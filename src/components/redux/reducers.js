/*** 包含n个reducer的文件 */

import { INCREMENT, DECREMENT } from './action_types'

export function counter(state=0, action){
    switch (action.type){
        case INCREMENT:
            console.log(state,action)
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}























