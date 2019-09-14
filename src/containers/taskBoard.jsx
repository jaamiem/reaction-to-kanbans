import React from 'react';
import { connect } from 'react-redux';

import FilterBar from '../components/taskListFilterBar.jsx';
import TaskListDisplay from '../components/taskListDisplay.jsx';



class TaskBoard extends React.Component {
	
	componentDidMount() {
		const {taskRows, loadTasks} = this.props;
		console.log('props', this.props)

		if(!taskRows) {
			loadTasks();
		}
		else if(taskRows < 1) loadTasks();
	}

	render() {
		return (
			<div style={styles} >
				{/* Filter Bar can become HOC?? */}
				<FilterBar style={{ width: '100%' }} />
				<TaskListDisplay taskRows={this.props.taskRows} />
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

const mapStateToProps = state => {
	const { tasks } = state;
	return {
		taskRows: tasks.rows,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadTasks: () => {
			dispatch({ type: 'TASKS_GET_REQUEST' });
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
