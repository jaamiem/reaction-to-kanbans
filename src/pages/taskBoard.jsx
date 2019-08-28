import React from 'react';
import TaskList from '../components/taskList.jsx'
import FilterBar from '../components/taskListFilterBar.jsx';

function splitTasksByUserID(tasks){
    const userTaskLists = [];
    const uniqueIDs = [...new Set(tasks.map(x => x.userId))];
    uniqueIDs.forEach(id => {
        const tasksByID = tasks.filter(x => x.userId === id)
        userTaskLists.push(tasksByID);
    });
    return userTaskLists; 
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
    height: '92vh',
    flexWrap: 'nowrap',
    overflowX: 'hidden',
    overflowY: 'auto',
    margin: '.5em',
    padding: '25px',
}

export default TaskBoard;
