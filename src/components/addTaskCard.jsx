import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';

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
	
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	toggleDataPanel = (event) => {
		let newToggle = this.state.togglePanel;

		if(event.target.name === 'title') newToggle = true;
		else newToggle = !newToggle;

		this.setState(prevState => ({ togglePanel: newToggle }))
	}

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
		// newState.togglePanel = this.state.togglePanel;

		this.setState({ ...newState })
	}

	inputField = (name, placeholder, onChange = this.handleChange, onFocus = undefined) => (
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

	chipsField = (name, placeholder, onChange = this.handleChange) => (
		<Chips 
			name='name'
			value={this.state[name]} 
			onChange={ onChange }
			style={ styles.input }>
		</Chips>
	)

	render() { 
		return (
			<React.Fragment>
				<Button icon={`pi pi-chevron-${this.state.togglePanel ? 'down' : 'up'}`} className='p-button-secondary' onClick={this.toggleDataPanel} style={ styles.panelButton } />
				<form onSubmit={this.handleSubmit}>
					<div className='p-inputgroup'>
						{ 
							this.inputField(
								'title', 
								`${this.state.togglePanel ? 'Title...' : 'Add New Task'}`, 
								this.handleChange, 
								this.toggleDataPanel )
						}

						<Button icon='pi pi-check' className='p-button-primary' type='submit' />
						<Button icon='pi pi-times' className='p-button-secondary' onClick={this.clearInput} type='button' />
						<Button icon='pi pi-window-maximize' className='p-button-secondary' type='button'/>
					</div>
					<div id='formPanel' style={ this.getPanelStyle() }>
						{ this.inputField('body', 'Task Description...') }
						{ this.inputField('author', 'Created By...') }
						{/* { this.chipsField('customers', 'Customers') } */}
						<Chips 
							name='customers'
							value={this.state.customers} 
							onChange={ this.handleChange }
							style={{ width: '100% !important' }}>
						</Chips>
						{ /*this.inputField('customers', 'Customers...')   replace with prime chips */ }
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
		// border: '.5px solid #ccc',
		// zIndex: '99'
	}
}
 
export default AddTaskCard;