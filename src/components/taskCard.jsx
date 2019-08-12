import React from 'react';
import { Card } from 'primereact/card';

function abridgeText(text, length) {
  return (text.length > length) ? 
    (text.slice(0,length) + '...') : text;
}

function TaskCard(props) {
  const task = props.task;

  return ( 
    <Card
      title={`Task #${task.id} for #${task.userId}`}
      subTitle={task.title}
      style={cardStyle}
    >
      <p> {abridgeText(task.body, 100)} </p>
    </Card>
  );
}

const cardStyle = {
  flex: '0 2 15%',
  margin: '1rem .25em'
}
 
export default TaskCard;