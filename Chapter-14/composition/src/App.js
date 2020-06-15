import React, { Component } from 'react';
import { SortedList } from './SortedList';
import { GeneralList } from './GeneralList';
import { ProController } from './ProController';
import { LogToConsole } from './LogToConsole';

const ProList = ProController(
	LogToConsole(SortedList, 'Sorted List', true, true, true),
);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ['Zoe', 'Bob', 'Alice', 'Dora', 'Joe'],
			cities: ['London', 'New York', 'Madrid', 'Paris', 'Milan'],
		};
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-3'>
						<GeneralList list={this.state.names} theme='primary' />
					</div>
					<div className='col-3'>
						<ProList list={this.state.names} />
					</div>
					<div className='col-3'>
						<GeneralList list={this.state.cities} theme='secondary' />
					</div>
					<div className='col-3'>
						<ProList list={this.state.cities} />
					</div>
				</div>
			</div>
		);
	}
}
