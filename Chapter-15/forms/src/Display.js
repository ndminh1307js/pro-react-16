import React, { Component } from 'react';

export class Display extends Component {
	formatValue = data =>
		Array.isArray(data) ? data.join(', ') : data.toString();

	render() {
		let keys = Object.keys(this.props.data);
		if (keys.length === 0) {
			return <div className='h5 bg-secondary text-white p-2'>No Data</div>;
		}

		return (
			<div className='container-fluid bg-secondary p-2'>
				{keys.map(key => (
					<div key={key} className='row h5 text-white'>
						<div className='col-3'>{key}</div>
						<div className='col-9'>{this.props.data[key]}</div>
					</div>
				))}
			</div>
		);
	}
}
