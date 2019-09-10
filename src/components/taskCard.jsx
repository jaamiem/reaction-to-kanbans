import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'

// Restrict length of display text
function abridgeText(text, length) {
	return (text.length > length) ? 
		(text.slice(0,length) + '...') : text;
}

// function hasComments(task) {
// 	let val = task.comments ? task.comments.length : 'No ';
// 	return <span style={styles.card.footer}><p>{val} Comments</p></span>
// }

const piButton = (icon, onClick = undefined, severity, style, disabled = false) => (
	<Button 
		icon={ `pi pi-${icon}` }
		onClick={ onClick } 
		className={`p-button-${severity}`}
		disabled={ disabled }
		style={ style }
	/>
);

function TaskCard(props) {
	const task = props.task;

	return (
		<Card style={styles.card}>
			<div style={styles.topBar}>
				<h5 style={styles.topBar.title}>
					{ abridgeText(task.title, 50) }
				</h5>
				<div style={styles.topBar.controls} className='p-inputgroup'>
					{/* Prime icon button bar */}
					{/* { piButton('angle-up', props.onMovePosition, 'primary', styles.posControl) }
					{ piButton('angle-down', props.onMovePosition, 'primary', styles.posControl) } */}
					{ piButton('trash', props.onDelete, 'secondary') }
					{ piButton('window-maximize', props.onOpenModal.bind(null, task), 'secondary') }
					{ piButton('check', props.onToggleComplete, 'success') }
				</div>
			</div>
			<hr/>
			<p> { abridgeText(task.body, 100) } </p>
			{/* {hasComments(task)} */}
			{ task.comments &&
				<span style={styles.card.footer}>
					<p>{task.comments.length} Comments</p>
				</span>
			}
		</Card>
	);
}

const styles = {
	// posControl: {
	// 	height: '40%',
	// 	width: '50%',
	// 	position: 'relative'
	// },
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
 
export default /*connect(null, null)*/(TaskCard);