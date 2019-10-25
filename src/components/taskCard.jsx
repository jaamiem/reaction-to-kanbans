import React from 'react';
// import { connect } from 'react-redux';
import { Card } from 'primereact/card';
// import { Button } from 'primereact/button'

// Restrict length of display text
function trimText(text, length) {
	return (text.length > length) ? 
		`${text.slice(0,length)}...` : text;
}

// Refactor to pure component?
function TaskCard(props) {
	const task = props.task;

	return (
		<Card style={styles.card}>
			<div style={styles.topBar}>
				<h5 style={styles.topBar.title}>
					{ trimText(task.title, 50) } - { `${task.completed}` }
				</h5>
				<div style={styles.topBar.controls} className='p-inputgroup'>
					{ props.piButton('window-maximize',() => props.onOpenModal(task), 'secondary') /* consistancy with bind/anon func */}  
					{ props.piButton('trash', () => props.deleteTask(task), 'secondary') }
					{ props.piButton('check', () => props.putTask({ ...task, completed: !task.completed }), 'success') }
				</div>
			</div>
			<hr/>
			<p> { trimText(task.body, 150) } </p>
			{ 
				task.comments &&
					<span style={styles.card.footer}>
						<p>{task.comments.length} Comments</p>
					</span>
			}
		</Card>
	);
}

const styles = {
	card: {
		flex: '0 0 15%',
		margin: '.35rem .25em',
		// userSelect: 'none',
		footer: {
			color: '#9e9e9e',
			textDecoration: 'underline',
		},
	},
	topBar: {
		display: 'flex',
		// cursor: 'pointer',
		title: {
			display: 'inline-block',
			flex: '1 0 45%'
		},
		controls: {
			display: 'inline',
			position: 'top',
		}
	},
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		deleteTask: (id) => { dispatch({ type: 'TASK_DELETE_REQUEST', payload: { id }}) },
// 		toggleComplete: (id) => { dispatch({ type: 'TASK_TOGGLE_COMPLETE', id }) },
// 	}
// }
 
export default (TaskCard);
// connect(null, mapDispatchToProps)