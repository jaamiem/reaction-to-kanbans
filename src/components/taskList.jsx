import React, { useState } from 'react';
import TaskCard from './taskCard.jsx';



const TaskList = (props) => {

  
  return (
    <div>
      {props.taskListState.map(task =>
        <TaskCard key={task.id} task={task} />
      )}
    </div>
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
 
export default TaskList;