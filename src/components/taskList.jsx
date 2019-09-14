import React, { useState } from 'react';
import TaskCard from './taskCard.jsx';
import AddTaskCard from './addTaskCard.jsx';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Dialog } from 'primereact/dialog';

function TaskList(props) {
	const [modalVisible, toggleVisible] = useState(false);
	const [currentModalTask, changeModalTask] = useState({
		userId: 0,
		id: 0,
		title: '',
		body: '',
		key: 0,
		completed: false,
	});

	const handleDelete = (e) => {
	}

	const handleToggleComplete = (e) => {
	}

	// const handleMovePosition = (e) => {}

	const handleOpenModal = (task) => {
		changeModalTask(task);
		toggleVisible(true);
	}

	return (
		<div style={styles.listContainer} >

			<div style={styles.listHeader} draggable>
				<h4> User {props.taskRows[0].userId} </h4>
			</div>

			<ScrollPanel style={styles.list} >
				{props.taskRows.map(task =>
					<TaskCard 
						key={ task.id } 
						task={ task } 
						onDelete={ handleDelete }
						onToggleComplete={ handleToggleComplete }
						// onMovePosition={ handleMovePosition }
						onOpenModal={ handleOpenModal }
					/>
				)}
			</ScrollPanel>
			<Dialog 
				visible={modalVisible}
				header={currentModalTask.title} 
				modal={true}
				dismissableMask={true}
				onHide={() => toggleVisible(false)}>
				{ currentModalTask.title }
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
		borderBottom: '1.5px solid #ccc',
	},
	list: { 
		height: '100%',
		background: '#ededed',
	}
}
 
export default TaskList;