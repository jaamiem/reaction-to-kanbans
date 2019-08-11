import React from 'react';
import TaskList from '../components/taskList.jsx'

const Board = (props) => {
    // console.log(`I'm in Board.js! :: ${props}`)
    
    return (
        <div>
            <TaskList taskListState={props.taskListState} />
        </div>
    );
}

export default Board;
