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
 
export default TaskList;