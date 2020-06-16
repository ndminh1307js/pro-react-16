import React, { Component } from 'react';
import { FormValidator } from './FormValidator';
import { ValidationMessage } from './ValidationMessage';
import { ValidateForm } from './wholeFormValidation';

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			emailConfirm: '',
			order: '',
			terms: false,
		};
		this.rules = {
			name: { required: true, minLength: 3, alpha: true },
			email: { required: true, email: true },
			emailConfirm: { required: true, email: true, equals: 'email' },
			order: { required: true },
			terms: { true: true },
		};
	}

	updateFormValue = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	updateFormValueCheck = event => {
		const { name, checked } = event.target;
		this.setState({ [name]: checked });
	};

	render() {
		return (
			<div className='h5 bg-info text-white p-2'>
				<FormValidator
					data={this.state}
					rules={this.rules}
					submit={this.props.submit}
					validateForm={ValidateForm}>
					<ValidationMessage field='form' />

					<div className='form-group'>
						<label>Name</label>
						<input
							className='form-control'
							name='name'
							value={this.state.name}
							onChange={this.updateFormValue}
						/>
						<ValidationMessage field='name' />
					</div>
					<div className='form-group'>
						<label>Email</label>
						<input
							className='form-control'
							name='email'
							value={this.state.email}
							onChange={this.updateFormValue}
						/>
						<ValidationMessage field='email' />
					</div>
					<div className='form-group'>
						<label>Confirm Email</label>
						<input
							className='form-control'
							name='emailConfirm'
							value={this.state.emailConfirm}
							onChange={this.updateFormValue}
						/>
						<ValidationMessage field='emailConfirm' />
					</div>
					<div className='form-group'>
						<label>Ice Cream Flavors</label>
						<textarea
							className='form-control'
							name='order'
							value={this.state.order}
							onChange={this.updateFormValue}></textarea>
						<ValidationMessage field='order' />
					</div>
					<div className='form-group'>
						<div className='form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								name='terms'
								checked={this.state.terms}
								onChange={this.updateFormValueCheck}
							/>
							<label className='form-check-label'>Agree to our terms</label>
						</div>
						<ValidationMessage field='terms' />
					</div>
				</FormValidator>
			</div>
		);
	}
}
