import React from 'react';
import TaskList from '../components/taskList.jsx'

function getUserTask(tasks){
    let userTasks = []; 
    [...new Set(tasks.map(x => x.userId))].forEach(id => {
        userTasks.push(tasks.filter(x => x.userId === id));
    });
    return userTasks; 
}

const Board = (props) => {
    // console.log(`I'm in Board.js! :: ${props}`)
    
    const userTasks = getUserTask(props.taskListState); 
    

    return (
        <div>
            {
                userTasks.map(userTasks => <TaskList taskListState={userTasks} />)
            }

           
        </div>
    );
}

export default Board;
