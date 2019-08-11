import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  function Home(){
    return <h1> index </h1>; 
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> 
      </Switch>
    </Router>
  );
}

export default App;