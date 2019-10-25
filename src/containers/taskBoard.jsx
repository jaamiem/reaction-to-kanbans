import React from 'react';
// import { connect } from 'react-redux';

import FilterBar from '../components/taskListFilterBar.jsx';
import TaskListDisplay from '../components/taskListDisplay.jsx';

class TaskBoard extends React.Component {
	render() {
		return (
			<div style={styles} >
				<FilterBar style={{ width: '100%' }}
					render={(props) => 
						<TaskListDisplay {...props}	/>
				}/>
			</div>
		);
	}
}

const styles = {
	width: '95%',
	height: '90%',
	border: '1px solid #f5f5f5',
	margin: 'auto',
	borderRadius: '6px'
}

// const mapStateToProps = state => {
// 	const { task } = state;
// 	// console.log('here!', task.rows)
// 	return {
// 		taskRows: task.rows,
// 	};
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		loadTasks: () => {
// 			dispatch({ type: 'TASKS_GET_REQUEST' });
// 		},
// 	};
// }

export default (TaskBoard);
