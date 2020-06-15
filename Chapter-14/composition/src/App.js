import React, { Component } from 'react';
import { SortedList } from './SortedList';
import { GeneralList } from './GeneralList';
import { ProModeContext } from './ProModeContext';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ['Zoe', 'Bob', 'Alice', 'Dora', 'Joe'],
			cities: ['London', 'New York', 'Madrid', 'Paris', 'Milan'],
			proContextData: {
				proMode: false,
			},
		};
	}

	toggleProMode = () => {
		this.setState(
			state => (state.proContextData.proMode = !state.proContextData.proMode),
		);
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
								value={this.state.proContextData.proMode}
								onChange={this.toggleProMode}
							/>
							<label className='form-check-label'>Pro Mode</label>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-6'>
						<GeneralList list={this.state.names} theme='primary' />
					</div>
					<div className='col-6'>
						<ProModeContext.Provider value={this.state.proContextData}>
							<SortedList
								proMode={this.state.proMode}
								list={this.state.names}
							/>
						</ProModeContext.Provider>
					</div>
				</div>
			</div>
		);
	}
}
