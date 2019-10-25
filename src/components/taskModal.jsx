import React, { useState } from 'react';
import { Button } from 'primereact/button';
// import { InputTextarea } from 'primereact/inputtextarea';

function TaskModal(props) {
	const [comment, setComment] = useState('');

	const task = props.task;

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('comment submitted:', comment)
	}

	const onDelete = () => {
		props.deleteTask(task); 
		props.handleVisible();
	}

	return (
		<div>
			<div>
				<h4> { task.title } - { `${task.completed}` } </h4>
			</div>
			<div>
				{ task.body }
				<div className='p-inputgroup'>
					{ props.piButton('check', ()=> props.toggleComplete(task), 'secondary', 'Completed') }
					{ props.piButton('pencil', ()=> {}, 'secondary', 'Edit') }
					{ props.piButton('trash', ()=> { onDelete() }, 'secondary', 'Delete') }
				</div>
				{/* <a onClick={()=> props.toggleComplete(task.id)}> {`${task.Completed ? 'Toggle: Open' : 'Toggle: Completed'}`}</a> */}
			</div>
			<div style={{ background: '#fafafa' }}>
			<hr/>
				<form onSubmit={ onSubmit } style={ styles.form } >
					<input
						type='text'
						value={ comment }
						onChange={ e => setComment(e.target.value) }
						style={ styles.form.input }
						placeholder='Add a comment...'
					/>
					<Button 
						label='Post'
						// onClick={ onSubmit }
					/>
				</form>
			</div>
			
		</div>
	)
}

const styles = {
	form: {
		display: 'flex',
		justifyContent: 'space-around',
		input: {
			width: '80%',
			height: '2rem',
		}
	},
}

export default TaskModal;