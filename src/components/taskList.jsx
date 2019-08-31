import React from 'react';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import { ScrollPanel } from 'primereact/scrollpanel';

function TaskList(props) {

  return (
    <div style={styles.listContainer} >

      <h4> User {props.taskRows[0].userId} </h4>

      <ScrollPanel style={styles.list} >

        {props.taskRows.map(task =>
        <TaskCard key={task.id} task={task} />
        )}

      </ScrollPanel>

      <AddTaskCard />
    </div >  
  );
}


const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    minWidth: '450px',
    marginRight: '1em',
  },
  list: { 
    height: '100%',
    background: '#ededed',
  }
}
 
export default TaskList;