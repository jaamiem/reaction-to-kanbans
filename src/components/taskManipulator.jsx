import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTaskAction, putTaskAction } from '../api/taskActionCreators.js';

import { Button } from 'primereact/button'

class TaskManipulator extends Component {
	piButton = (icon, onClick, severity, label = undefined, disabled = false, style) => (
		<Button
			icon={ `pi pi-${icon}` }
			onClick={ onClick } 
			className={`p-button-${severity}`}
			label={ label }
			disabled={ disabled }
			style={ style }
		/>
	);

	render() {
		const renderProps = {
			deleteTask: this.props.deleteTask,
			putTask: this.props.putTask,
			piButton: this.piButton,
		}

		return (
			<React.Fragment>
				{this.props.render(renderProps)}
			</React.Fragment>
		)
	}
}

TaskManipulator.propTypes = {
	render: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTask: (task) => { dispatch( deleteTaskAction(task) ) },
		putTask: (task) => { dispatch( putTaskAction(task) ) },
	}
}

export default connect(null, mapDispatchToProps)(TaskManipulator);