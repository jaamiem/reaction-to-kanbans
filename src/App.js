import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import TaskBoard from './pages/taskBoard.jsx';
import Navbar from './components/navbar.jsx';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function App() {
  const [taskListState, changeTaskList] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=70')
    .then(res => changeTaskList(res.data))
    .catch(err => console.error(err));

  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route 
          path='/' 
          exact 
          render={(props) => 
            <TaskBoard taskListState={taskListState} />
        } />
      </Switch>
    </Router>
  );
}

export default App;