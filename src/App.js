import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import axios from 'axios';

import TaskBoard from './pages/taskBoard.jsx';
import Navbar from './components/navbar.jsx';
import Counter from './components/counter.js';

import { action } from './store.js';
import { useSelector } from 'react-redux';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function App() {
	// const [taskListState, changeTaskList] = useState([]);

	// axios.get('https://google.com')
	// 	.then(res => changeTaskList(res.data))
	// 	.catch(err => console.error(err));

	const counter = useSelector(state => state.counter);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route 
					path='/' 
					exact 
					render={(props) => 
						<TaskBoard />
				} />
				<Route
					path='/counter'
					render={(props) =>
						<Counter
							value={counter}
							onIncrement={() => action('INCREMENT')}
							onDecrement={() => action('DECREMENT')}
							onIncrementAsync={() => action('INCREMENT_ASYNC')} />
				} />
			</Switch>
		</Router>
	);
}

export default App;