import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Board from "./pages/Board.js"
import TaskList from './components/taskList.jsx';
import axios from 'axios';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function App() {
  function Home(){
    return <h1> index </h1>; 
  }

  const [tasksListState, changeTaskList] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
    .then(res => changeTaskList(res.data));

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          path='/task' 
          exact 
          render={(props) => 
            <Board taskListState={tasksListState} />
        } />
      </Switch>
    </Router>
  );
}

export default App;