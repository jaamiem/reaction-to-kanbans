import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

class taskListFilterBar extends Component {
    state = {}

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    render() {
        return (
            <Card style={ styles.card } >
                <Card.Body>
                    <form>
                        {this.filterInput('taskIdFilter', 'Task ID:', 'Task ID...')}
                        {this.filterInput('userFilter', 'User:', 'By User...')}
                        {this.filterInput('custFilter', 'Customer:', 'By customer...')}
                        {this.filterInput('createdByFilter', 'Created By:', 'Created by...')}
                        {this.filterInput('filter5', '', 'filter5...')}
                    </form>
                </Card.Body>
            </Card>
        )
    }

    filterInput = (name, label, placeholder) => 
        <div style={styles.input}>
            <label>{ label }</label>
            <input type='text' 
                placeholder={placeholder} 
                name={name}
                value={this.state.value}
                onChange={this.handleChange}
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
        paddingTop: '20px'
    }
}

export default taskListFilterBar;
