import React, { useState } from 'react';
import { Card } from 'primereact/card';

const TaskCard = (props) => {
  const task = props.task;

  return ( 
    <Card
      title={`Task #${task.id} for #${task.userId}`}
      subTitle={task.title}>
      <p> {task.body} </p>
    </Card>
  );
}
 
export default TaskCard;