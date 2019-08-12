import React from 'react';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

const handleAddTaskClick = () => {
  
}

function TaskList(props) {

  return (
    <div style={listStyle} >
      <h2> User {props.taskListState[0].userId} </h2>
      <div style={{ height: '90vh', margin: 'auto' , background: '#ededed', overflowY: 'auto' }} >
        {props.taskListState.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </div>
      <AddTaskCard />
      {/* <Button 
        onClick={handleAddTaskClick}
        label='Add New Task' 
        className='p-button-secondary' 
        style={{ width: '100%', height: '3em', marginTop: '.5em' }} /> */}
    </div >  
  );
}

const listStyle = {
  width: '20%',
  minWidth: '350px',
  marginRight: '1em',
  height: '100%',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
 
export default TaskList;