import React from 'react';
import TaskList from '../components/taskList.jsx'

function splitTasksByUserID(tasks){
    const userTasks = []; 
    [...new Set(tasks.map(x => x.userId))].forEach(id => {
        userTasks.push(tasks.filter(x => x.userId === id));
    });
    return userTasks; 
}

function TaskBoard(props) {
    const userTasks = splitTasksByUserID(props.taskListState);

    return (
        <div style={boardStyles}>
            {userTasks.map(taskList => 
                <TaskList key={taskList[0].userId} taskListState={taskList} />
            )}
        </div>
    );
}

const boardStyles = {
    display: 'flex',
    height: '90vh',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'auto',
    padding: '2em 25px'
}

export default TaskBoard;
