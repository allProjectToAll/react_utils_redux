import './App.css';
// import Redux from './components/redux/index'

// import ReactRedux from './components/react-redux/index'
import ReactRedux from './containers/app'



function App(props) {

  return (
    <div className="App">
      <br/>
      <br/>
      
      1.redux
      {/* <Redux {...props}></Redux> */}
      <br/>
      2.react-redux
      <ReactRedux {...props}></ReactRedux>


      <br/>
      <br/>





    </div>
  );
}

export default App;
