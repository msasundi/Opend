import React from 'react';
import Dashboard from "../src/views/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"; 
// import {connect} from "react-redux" 
// import {increment , decrement} from "./store"


class App extends React.Component {
  
  render() {
    return (
        <Router>
      <div>
     <Route exact path="/session_id:id"  component={Dashboard} />
      </div>
        </Router>
    );
  }
}

// function mapstateToProps(globalState){
//   return {
//     count : globalState
//   }
// }

// const MaptoDispatchToProps = {

//   increment : increment,
//   decrement : decrement
// }


export default App;
