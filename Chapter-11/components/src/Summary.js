import React, { Component } from 'react';
import { SimpleButton } from './SimpleButton';
import { HooksButton } from './HooksButton';

export class Summary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	incrementCounter = (increment) => {
		this.setState(state => ({ counter: state.counter + increment }));
	}

	render() {
		return (
			<React.Fragment>
				<td>{this.props.index + 1}</td>
				<td>{this.props.name}</td>
				<td>{this.props.name.length}</td>
				<td>
					<SimpleButton
						className='btn btn-warning btn-sm m-1'
						callback={this.props.reverseCallback}
						text={`Reverse (${this.props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter}
					/>
					<HooksButton
						className='btn btn-info btn-sm m-1'
						callback={() => this.props.promoteCallback(this.props.name)}
						text={`Promote (${this.props.name})`}
						counter={this.state.counter}
						incrementCallback={this.incrementCounter}
					/>
				</td>
			</React.Fragment>
		);
	}
}
