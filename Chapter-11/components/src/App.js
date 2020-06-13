import React, { Component } from 'react';
import { Summary } from './Summary';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ['Jess', 'Emily', 'Matt'],
			counter: 0
		};
	}

	reverseNames = () => {
		this.setState({
			names: this.state.names.reverse()
		});
	}

	promoteName = (name) => {
		this.setState({
			names: [name, ...this.state.names.filter(val => val !== name)]
		});
	}

	incrementCounter = (increment) => {
		this.setState(state => ({ counter: state.counter + increment }));
	}

	render() {
		return (
			<table className='table table-sm table-stripped'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Letters</th>
					</tr>
				</thead>
				<tbody>
					{this.state.names.map((name, index) => (
						<tr key={name} className='p-2'>
							<Summary
								index={index}
								name={name}
								reverseCallback={this.reverseNames}
								promoteCallback={this.promoteName}
								counter={this.state.counter}
								incrementCallback={this.incrementCounter}
							/>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}
