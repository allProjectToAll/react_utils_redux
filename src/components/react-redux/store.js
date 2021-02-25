import { createStore,applyMiddleware } from 'redux'
import { counter } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
    counter,
    applyMiddleware(thunk)  //为了调用异步函数
    );//内部会第一次调用reducer函数得到初始state

export default store;