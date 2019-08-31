import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


class AddTaskCard extends Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // if()
    console.log(`new task submitted: ${this.state.value}`);
    this.setState({ value: '' });
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div className='p-inputgroup' style={styles}>
          <InputText type='text' placeholder='Add New Task...' value={this.state.value} onChange={this.handleChange} />
          <Button icon='pi pi-check' className='p-button-primary' type='submit' />
          <Button icon='pi pi-times' className='p-button-secondary' type='submit' />
          <Button icon='pi pi-times' className='p-button-secondary' type='submit' />
        </div>
      </form>
    );
  }
}

const styles = {
  width: '100%',
}
 
export default AddTaskCard;