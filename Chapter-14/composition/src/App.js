import React, { Component } from 'react';
import { SortedList } from './SortedList';
import { GeneralList } from './GeneralList';
import { ProFeature } from './ProFeature';

const ProList = ProFeature(SortedList);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ['Zoe', 'Bob', 'Alice', 'Dora', 'Joe'],
			cities: ['London', 'New York', 'Madrid', 'Paris', 'Milan'],
			proMode: false,
		};
	}

	toggleProMode = () => {
		this.setState({ proMode: !this.state.proMode });
	};

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 text-center-p-2'>
						<div className='form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								value={this.state.proMode}
								onChange={this.toggleProMode}
							/>
							<label className='form-check-label'>Pro Mode</label>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-3'>
						<GeneralList list={this.state.names} theme='primary' />
					</div>
					<div className='col-3'>
						<ProList list={this.state.names} pro={this.state.proMode} />
					</div>
					<div className='col-3'>
						<GeneralList list={this.state.cities} theme='secondary' />
					</div>
					<div className='col-3'>
						<ProList list={this.state.cities} pro={this.state.proMode} />
					</div>
				</div>
			</div>
		);
	}
}
