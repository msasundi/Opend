import React from 'react';
import Dashboard from "../src/views/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"; 

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

export default App;
