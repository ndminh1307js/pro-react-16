import React, { Component } from 'react';
import { Message } from './Message';
// import { List } from './List';
// import { ExternalCounter } from './ExternalCounter';
// import { HooksMessage } from './HooksMessage';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counterLeft: 0,
			counterRight: 0,
		};
	}

	incrementCounter = counter => {
		if (counter === 'left') {
			this.setState({ counterLeft: this.state.counterLeft + 1 });
		} else {
			this.setState({ counterRight: this.state.counterRight + 1 });
		}
	};

	render() {
		console.log('Render App Component');
		return (
			<div className='container text-center'>
				<div className='row p-2'>
					<div className='col-6'>
						<Message
							message={`Counter: ${this.state.counterLeft}`}
							callback={() => this.incrementCounter('left')}
							text='Increment Counter Left'
						/>
					</div>
					<div className='col-6'>
						<Message
							message={`Counter: ${this.state.counterRight}`}
							callback={() => this.incrementCounter('right')}
							text='Increment Counter Right'
						/>
					</div>
				</div>
			</div>
		);
	}
}
