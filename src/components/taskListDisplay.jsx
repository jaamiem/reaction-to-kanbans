import React from 'react';

// import TaskList from './taskList.jsx';
import TaskManipulator from './taskManipulator.jsx';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import TaskModal from './taskModal.jsx'

import { ScrollPanel } from 'primereact/scrollpanel';
import { Dialog } from 'primereact/dialog';

class TaskListDisplay extends React.Component {
	state={
		visible: false,
		modalTask: {}
	}

	openModal = (task) => {
		this.setState({
			visible: true,
			modalTask: { ...task }
		});
	}

	hideModal = () => {
		this.setState({
			visible: false,
			modalTask: { ...this.state.modalTask }
		})
	}

    splitTasksByUserID (tasks) {
        const userTaskLists = [];
        if(tasks) {
            // Get unique userIds from tasks object
            const uniqueIDs = [...new Set( tasks.map(x => x.userId) )];
            uniqueIDs.forEach(id => {
                const tasksByID = tasks.filter(x => x.userId === id)
                userTaskLists.push(tasksByID);
            });
        } 
        else console.log('Tasks not found');
        return userTaskLists; 
	}
	

    render() {
        try {
            // const { taskRows } = this.props;
            const userTasks = this.splitTasksByUserID(this.props.taskRows);

            return (
                <div style={styles}>
                    { userTasks.map(( taskList ) => // Create a list per user
						// <TaskList key={taskList[0].userId} taskRows={taskList} />
						<div key={taskList[0].userId} style={listStyles.listContainer} >

							<div style={listStyles.listHeader}>
								<h4> User {taskList[0].userId} </h4>
							</div>
							<ScrollPanel style={listStyles.list} >

								{ taskList.map(( task ) => // Create a task card per index in list
									<TaskManipulator
										key={ task.id }
										render={(props) =>
											<TaskCard
												{...props}
												task={ task }
												onOpenModal={ this.openModal }
											/>
										}
									/>
								)}
							</ScrollPanel>
							<AddTaskCard />
						</div >  
					)}
					<Dialog 
						visible={this.state.visible}
						header={`User ${this.state.modalTask.userId} - task ${this.state.modalTask.id}`} 
						modal={true}
						dismissableMask={true}
						onHide={ this.hideModal }
					>
						<TaskManipulator render={(props) => 
							<TaskModal
								{...props}
								handleVisible={ this.hideModal }
								task={ this.state.modalTask }
							/>
						} />
					</Dialog>
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
    background: '#f5f5f5',
}

const listStyles = {
	listContainer: {
		display: 'flex',
		flexDirection: 'column',
		// vvvvv  replace with flex
		width: '20%',
		minWidth: '450px',
		marginRight: '1em',
		// ^^^^^^
		border: '1px solid #ccc',
		borderRadius: '5px 5px 5px 5px',
		overflow: 'hidden',
	},
	listHeader: {
		width: '100%',
		backgroundColor: 'white',
		height: '3em',
		textAlign: 'center',
		borderBottom: '.5px solid #ccc',
	},
	list: { 
		height: '100%',
		background: '#ededed',
	}
}

export default (TaskListDisplay);
