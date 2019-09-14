import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Chips } from 'primereact/chips';

class AddTaskCard extends Component {
	getInitialState = () => {
		return {
			title: '',
			body: '',
			author: '',
			customers: [],
			assignedTo: [],	
			togglePanel: false,
		}
	}

	state = this.getInitialState();
	
	// Map change of input field into state.[field name]
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	// Display when focus input field, toggle when button clicked 
	toggleDataPanel = (event) => {
		let newToggle = this.state.togglePanel;

		if(event.target.name === 'title') newToggle = true;
		else newToggle = !newToggle;

		this.setState(prevState => ({ togglePanel: newToggle }))
	}

	// Styles for toggling the new task panel
	getPanelStyle = () => {
		return {
			display: this.state.togglePanel ? 'flex' : 'none',
			flexDirection: 'column'
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(`new task submitted: ${this.state.value}`);
		this.setState({ ...this.state });
	}

	clearInput = () => {
		const newState = this.getInitialState();
		this.setState({ ...newState })
	}

	inputField = (name, placeholder, onFocus = undefined, onChange = this.handleChange) => (
		<InputText
			name={ name }
			placeholder={ placeholder }
			value={ this.state[name] } 
			onChange={ onChange }
			onFocus={ onFocus }
			style={ styles.input } 
			autoComplete='off'
		/>
	);

	render() { 
		return (
			<React.Fragment>
				<Button 
					icon={`pi pi-chevron-${this.state.togglePanel ? 'down' : 'up'}`}
					className='p-button-secondary' 
					onClick={this.toggleDataPanel} 
					style={ styles.panelButton } 
				/>
				<form onSubmit={this.handleSubmit}>
					<div className='p-inputgroup'>
						{ 
							this.inputField(
								'title', 
								`${this.state.togglePanel ? 'Title...' : 'Add New Task'}`,
								this.toggleDataPanel )
						}

						<Button icon='pi pi-check' className='p-button-primary' type='submit' />
						<Button icon='pi pi-times' className='p-button-secondary' onClick={this.clearInput} type='button' />
						<Button icon='pi pi-window-maximize' className='p-button-secondary' type='button'/>
					</div>
					<div id='formPanel' style={ this.getPanelStyle() }>
						{ this.inputField('body', 'Task Description...') }
						{ this.inputField('author', 'Created By...') }
						{ this.inputField('customers', 'Customers...') }
						{ this.inputField('assignedTo', 'Assigned To...') }
					</div>
				</form>
			</React.Fragment>
		);
	}
}

const styles = {
	input: {
		flex: '1',
		zIndex: '1',
		
	},
	panelButton: {
		width: '100%', 
		height:'1.5em',
		borderRadius: '0px',
	}
}
 
export default AddTaskCard;