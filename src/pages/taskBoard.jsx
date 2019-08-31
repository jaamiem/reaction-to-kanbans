import React from 'react';
import { connect } from 'react-redux';

import FilterBar from '../components/taskListFilterBar.jsx';
import TaskListDisplay from '../components/taskListDisplay.jsx';

const styles = {}

class TaskBoard extends React.Component {

    componentDidMount() {
        const {taskRows, loadTasks} = this.props;
        console.log('props', this.props)

        if(!taskRows) {
            loadTasks();
        }
        else if(taskRows < 1) loadTasks();
    }


    render(){
        // console.log('here', this.props.taskRows)
        return (
            <div styles={styles} >
                <FilterBar style={{ width: '100%' }} />
                <TaskListDisplay taskRows={this.props.taskRows} />
            </div>
        );
    }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
