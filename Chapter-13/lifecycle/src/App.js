import React, { Component } from 'react';
// import { Message } from './Message';
import { DirectionDisplay } from './DirectionDisplay';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 100,
		};
	}

	changeCounter = val => {
		this.setState({ counter: this.state.counter + val });
	};

	render() {
		console.log('Render App Component');
		return (
			<div className='container text-center'>
				<DirectionDisplay value={this.state.counter} />
				<div className='text-center'>
					<button
						className='btn btn-success m-1'
						onClick={() => this.changeCounter(1)}>
						Go Up
					</button>
					<button
						className='btn btn-danger m-1'
						onClick={() => this.changeCounter(-1)}>
						Go Down
					</button>
				</div>
			</div>
		);
	}
}
