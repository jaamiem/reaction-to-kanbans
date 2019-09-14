import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TaskBoard from './containers/taskBoard.jsx';

// import { action } from './store.js';
// import { useSelector } from 'react-redux';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route 
					path='/' 
					exact 
					render={(props) => <TaskBoard /> } 
				/>
			</Switch>
		</Router>
	);
}

export default App;