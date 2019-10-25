import React, { Component } from 'react'
import { Editor } from 'primereact/editor';

class newTaskEditor extends Component {
	state = {
		bodyText: '',
	}

	render() {
		return(
			<div>
				<Editor style={{ height: '320px' }} value={this.state.inputText} onTextChange={(e) => this.setState({bodyText: e.htmlValue})} />
			</div>
		);
	}
}