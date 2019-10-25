import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Chips } from 'primereact/chips';

function AddTaskCard(props) {
	const getInitialFormState = () => {
		return {
			title: '',
			body: '',
			author: '',
			customers: [],
			assignedTo: [],
		}
	}

	const [toggleState, changeToggle] = useState(false);
	const [formDataState, changeFormData] = useState(getInitialFormState())
	
	// Map change of input field into state.[field name]
	const handleChange = (event) => {
		changeFormData({...formDataState, [event.target.name]: event.target.value});
	}

	// Display when focus input field, toggle when button clicked
	const toggleDataPanel = (event) => {
		let newToggle = toggleState;

		if(event.target.name === 'title') newToggle = true;
		else newToggle = !newToggle;

		changeToggle(newToggle);
	}

	// Styles for toggling the new task panel
	const getPanelStyle = () => {
		return {
			display: toggleState ? 'flex' : 'none',
			flexDirection: 'column'
		};
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		props.addTask(formDataState);
	}

	const clearInput = () => {
		const newState = getInitialFormState();
		changeFormData(newState);
	}

	const inputField = (name, placeholder, onFocus = undefined, onChange = handleChange) => (
		<InputText
			name={ name }
			placeholder={ placeholder }
			value={ formDataState[name] } 
			onChange={ onChange }
			onFocus={ onFocus }
			style={ styles.input } 
			autoComplete='off'
		/>
	);

	// render() { 
	return (
		<React.Fragment>
			<Button 
				icon={`pi pi-chevron-${toggleState ? 'down' : 'up'}`}
				className='p-button-secondary' 
				onClick={toggleDataPanel} 
				style={ styles.panelButton } 
			/>
			<form onSubmit={handleSubmit}>
				<div className='p-inputgroup'>
					{ 
						inputField(
							'title', 
							`${toggleState ? 'Title...' : 'Add New Task'}`,
							(e) => {toggleDataPanel(e)} )
					}

					<Button icon='pi pi-check' className='p-button-primary' type='submit' />
					<Button icon='pi pi-times' className='p-button-secondary' onClick={clearInput} type='button' />
					<Button icon='pi pi-window-maximize' className='p-button-secondary' type='button' style={{ borderRadius: '0px' }} />
				</div>
				<div id='formPanel' style={ getPanelStyle() }>
					{ inputField('body', 'Task Description...') }
					{ inputField('author', 'Created By...') }
					{ inputField('customers', 'Customers...') }
					{ inputField('assignedTo', 'Assigned To...') }
				</div>
			</form>
		</React.Fragment>
	);
	// }
}

const styles = {
	input: {
		flex: '1',
		zIndex: '1',
		borderRadius: '0px',
		// marginBottom: '.3em',
	},
	panelButton: {
		width: '100%', 
		height:'1.5em',
		borderRadius: '0px',
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (data) => { dispatch({ type: 'TASK_NEW_REQUEST', payload: data }) }
	}
}
 
export default connect(null, mapDispatchToProps)(AddTaskCard);