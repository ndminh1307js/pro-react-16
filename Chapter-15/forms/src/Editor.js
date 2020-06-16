import React, { Component } from 'react';

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			order: '',
		};
	}

	updateFormValue = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value }, () => this.props.submit(this.state));
	};

	render() {
		return (
			<div className='h5 bg-info text-white p-2'>
				<div className='form-group'>
					<label>Name</label>
					<input
						className='form-control'
						name='name'
						value={this.state.name}
						onChange={this.updateFormValue}
					/>
				</div>
				<div className='form-group'>
					<label>Ice Cream Flavors</label>
					<textarea
						className='form-control'
						name='order'
						value={this.state.order}
						onChange={this.updateFormValue}></textarea>
				</div>
			</div>
		);
	}
}
