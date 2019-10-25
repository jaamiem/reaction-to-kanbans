import React, { useState } from 'react';

import TaskManipulator from './taskManipulator.jsx';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import TaskModal from './taskModal.jsx'

import { ScrollPanel } from 'primereact/scrollpanel';
import { Dialog } from 'primereact/dialog';
import Tabs from 'react-bootstrap/Tabs'

function TaskList(props) {
	const [modalVisible, toggleVisible] = useState(false);
	const [currentModalTask, changeModalTask] = useState({});

	const handleOpenModal = (task) => {
		changeModalTask(task);
		toggleVisible(true);
	}

	return (
		<div style={styles.listContainer} >

			<div style={styles.listHeader} draggable>
				<h4> User {props.taskRows[0].userId} </h4>
			</div>
			<Tabs id='listTabs'>
				{ /* completed/open lists */  }
			</Tabs> 
			<ScrollPanel style={styles.list} >
				{props.taskRows.map(task =>
					<TaskManipulator
						key={ task.id }
						render={(props) =>
							<TaskCard
								{...props}
								task={ task }
								onOpenModal={ handleOpenModal }
							/>
						}
					/>
				)}
			</ScrollPanel>

			<Dialog 
				visible={modalVisible}
				header={`User ${currentModalTask.userId} - task ${currentModalTask.id}`} 
				modal={true}
				dismissableMask={true}
				onHide={() => toggleVisible(false)}
			>
				<TaskManipulator render={(props) => 
					<TaskModal
						{...props}
						handleVisible={ toggleVisible }
						task={ currentModalTask }
					/>
				} />
				
			</Dialog>

			<AddTaskCard />
		</div >  
	);
}


const styles = {
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
		// borderBottom: '1.5px solid #ccc',
	},
	list: { 
		height: '100%',
		background: '#ededed',
	}
}
 
export default TaskList;