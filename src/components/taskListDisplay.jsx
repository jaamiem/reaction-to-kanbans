import React from 'react';

import TaskList from './taskList.jsx';

class TaskListDisplay extends React.Component {


    splitTasksByUserID(tasks) {
        const userTaskLists = [];
        if(!tasks) return [];
        const uniqueIDs = [...new Set(tasks.map(x => x.userId))];
        uniqueIDs.forEach(id => {
            const tasksByID = tasks.filter(x => x.userId === id)
            userTaskLists.push(tasksByID);
        });
        return userTaskLists; 
    }


    render() {
        try{
            const { taskRows } = this.props;

            if (!taskRows) {
                console.log('Got no rows!');
            }

            const userTasks = this.splitTasksByUserID(taskRows);
            // console.log(userTasks)

            return (
                <div style={styles}>
                    {userTasks.map(taskList => 
                        <TaskList key={taskList[0].userId} taskRows={taskList} />
                    )}
                </div>
            );
        } catch (error) {
            console.log(error)
        }
        
    }
}

const styles = {
    display: 'flex',
    height: '80vh',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'auto',
    margin: '.5em',
    padding: '25px',
}



export default (TaskListDisplay);
