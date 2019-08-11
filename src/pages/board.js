import React, { useState } from 'react';
import TaskList from '../components/taskList'

const Board = (props) => {

    
    return (
        <div>
            <TaskList taskListState={props.tasksListState} />
        </div>
    );
}

export default Board;
