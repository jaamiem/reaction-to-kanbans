import React, { useState } from 'react';
import { Card } from 'primereact/card';

const TaskCard = (props) => {
  const task = props.task;

  return ( 
    <Card
      title={`Task #${task.id} for #${task.userId}`}
      subTitle={task.title}
      style={cardStyle}
    >
      <p> {task.body} </p>
    </Card>
  );
}

const cardStyle = {
  flex: '0 2 15%',
  margin: '1rem .25em'
}
 
export default TaskCard;