import React, { Component } from 'react';

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			flavor: 'Vanilla',
			toppings: ['Strawberries'],
		};
		this.flavors = [
			'Chocolate',
			'Double Chocolate',
			'Triple Chocolate',
			'Vanilla',
		];
		this.toppings = ['Sprinkles', 'Fudge Sauce', 'Strawberries', 'Maple Syrup'];
	}

	updateFormValue = event => {
		this.setState({ [event.target.name]: event.target.value }, () =>
			this.props.submit(this.state),
		);
	};

	updateFormValueOptions = event => {
		let options = [...event.target.options]
			.filter(op => op.selected)
			.map(op => op.value);
		this.setState({ [event.target.name]: options }, () =>
			this.props.submit(this.state),
		);
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
					<select
						className='form-control'
						name='flavor'
						onChange={this.updateFormValue}>
						{this.flavors.map(flavor => (
							<option key={flavor} value={flavor}>
								{flavor}
							</option>
						))}
					</select>
				</div>
				<div className='form-group'>
					<label>Ice Cream Toppings</label>
					<select
						className='form-control'
						name='toppings'
						multiple={true}
						onChange={this.updateFormValueOptions}>
						{this.toppings.map(t => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
			</div>
		);
	}
}
