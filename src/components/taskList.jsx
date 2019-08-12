import React from 'react';
import TaskCard from './taskCard.jsx';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

const handleAddTaskClick = () => {
  
}

const TaskList = (props) => {

  return (
    <div style={{width: '20%', }} >
      <ScrollPanel style={{ height: '90vh', margin: 'auto' , background: '#ededed' }} >
        {props.taskListState.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </ScrollPanel>
      <Button 
        onClick={handleAddTaskClick}
        label='Add New Task' 
        className='p-button-secondary' 
        style={{ width: '100%', height: '3em', marginTop: '.5em' }} />
    </div >  
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
 
export default TaskList;