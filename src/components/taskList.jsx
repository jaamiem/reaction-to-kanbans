import React from 'react';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import { ScrollPanel } from 'primereact/scrollpanel';

function TaskList(props) {

  return (
    <div style={listStyle} >
      <h2> User {props.taskListState[0].userId} </h2>

      <ScrollPanel style={scrollStyle} >
        {props.taskListState.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </ScrollPanel>

      <AddTaskCard />
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

const scrollStyle = { 
  height: '90vh',
  margin: 'auto',
  background: '#ededed',
  overflowY: 'auto',
}
 
export default TaskList;