import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectTasksByTerms } from '../reducers/taskReducer.js';
import { getTasks, updateSearchTerms } from '../api/taskActionCreators.js';
import { debounce } from 'lodash';
import Card from 'react-bootstrap/Card';

class TaskListFilterBar extends Component {
	state = {}

	componentDidMount() {
		const {taskRows, loadTasks} = this.props;

		if(!taskRows) loadTasks();
		else if(taskRows < 1) loadTasks();
	}

    handleChange = (ev) => {
		const name = ev.target.name;
		const input = ev.target.value;
		this.setSearchTerms(name, input);
	}

	setSearchTerms = debounce((name, value) => {
		this.setState({...this.state, [name]: value }, 
			() => this.props.updateSearchTerms(this.state));
	}, 200);

	render() {
		const renderProps = {
			taskRows: this.props.taskRows,
		}

        return (
			<React.Fragment>
				<Card style={ styles.card } >
					<Card.Body>
						<form>
							{this.filterInput('id', 'Task ID:', 'Task ID...')}
							{this.filterInput('userId', 'User:', 'By User...')}
							{/* {this.filterInput('custFilter', 'Customer:', 'By customer...')}
							{this.filterInput('createdByFilter', 'Created By:', 'Created by...')}
							{this.filterInput('filter5', '', 'filter5...')} */}
						</form>
					</Card.Body>
				</Card>
				{this.props.render(renderProps)}
			</React.Fragment>
        )
    }

    // Returns an input field w/ label
    filterInput = (name, label, placeholder) => 
        <div style={styles.input}>
            <label>{ label }</label>
            <input type='text' 
                placeholder={placeholder} 
                name={name}
                // value={this.state.searchTerms[name]}
				onChange={this.handleChange}
				autoComplete='off'
                />
        </div>
}

const styles = {
    input: {
        display: 'inline',
        marginRight: '10px',
    },
    card: {
        display: 'flex',
    }
}

const mapStateToProps = state => {
	const { task } = state;
	return { 
		taskRows: selectTasksByTerms(task), 
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadTasks: () => dispatch({ type: 'TASKS_GET_REQUEST' }),
		updateSearchTerms: (terms) => dispatch(updateSearchTerms(terms)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFilterBar);
