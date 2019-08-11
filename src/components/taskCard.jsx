import React, { useState } from 'react';

const TaskCard = (props) => {
  const task = props.task;

  return ( 
    <React.Fragment>
      <h1> #{task.id} </h1>
      <h1> {task.title} </h1>
      <p> {task.body} </p>
    </React.Fragment>
  );
}
 
export default TaskCard;