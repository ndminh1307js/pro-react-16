import React, { Component } from 'react';

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			flavor: 'Vanilla',
			toppings: ['Strawberries'],
			twoScoops: false,
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

	updateFormValueCheck = event => {
		event.persist();
		this.setState(
			{
				toppings: event.target.checked
					? [...this.state.toppings, event.target.name]
					: this.state.toppings.filter(top => top !== event.target.name),
			},
			() => this.props.submit(this.state),
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
					{this.flavors.map(flavor => (
						<div className='form-check' key={flavor}>
							<input
								type='radio'
								name='flavor'
								value={flavor}
								checked={this.state.flavor === flavor}
								onChange={this.updateFormValue}
							/>
							<label className='form-check-label'>{flavor}</label>
						</div>
					))}
				</div>
				<div className='form-group'>
					<label>Ice Cream Toppings</label>
					{this.toppings.map(t => (
						<div className='form-check' key={t}>
							<input
								className='form-check-input'
								type='checkbox'
								name={t}
								checked={this.state.toppings.indexOf(t) > -1}
								onChange={this.updateFormValueCheck}
							/>
							<label className='form-check-label'>{t}</label>
						</div>
					))}
				</div>
			</div>
		);
	}
}
