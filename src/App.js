import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Board from './pages/board.jsx';
import axios from 'axios';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function App() {
  const [taskListState, changeTaskList] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
    .then(res => changeTaskList(res.data))
    .catch(err => console.error(err));

  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route 
          path='/' 
          exact 
          render={(props) => 
            <Board taskListState={taskListState} />
        } />
      </Switch>
    </Router>
  );
}

export default App;