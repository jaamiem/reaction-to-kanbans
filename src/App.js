import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  function Home(){
    return <h1> index </h1>; 
  }

  return (
    <Router>
      <Router path="/" exact component={Home} /> 


    </Router>
  );
}

export default App;
