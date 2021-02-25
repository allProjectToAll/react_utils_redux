import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'


// import store from './components/redux/store'
import store from './components/react-redux/store'



// redux写法
// function render(){
//   ReactDOM.render( <App store={store} />, document.getElementById('root') );
// }
// render();
// store.subscribe(render)

// react-redux写法
ReactDOM.render(
<Provider store={store} > 
  <App/>
</Provider>, document.getElementById('root') );

