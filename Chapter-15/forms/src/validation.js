import validator from 'validator';

export function ValidateData(data, rules) {
	let errors = {};
	Object.keys(data).forEach(field => {
		if (rules.hasOwnProperty(field)) {
			let fielderrors = [];
			let val = data[field];
			if (rules[field].required && validator.isEmpty(val)) {
				fielderrors.push('Value required');
			}

			if (!validator.isEmpty(val)) {
				if (
					rules[field].minLength &&
					!validator.isLength(val, rules[field].minLength)
				) {
					fielderrors.push(
						`Enter at least ${rules[field].minLength} characters`,
					);
				}

				if (rules[field].alpha && !validator.isAlpha(val)) {
					fielderrors.push('Enter only letters');
				}

				if (rules[field].email && !validator.isEmail(val)) {
					fielderrors.push('Enter a valid email address');
				}
			}

			if (fielderrors.length > 0) {
				errors[field] = fielderrors;
			}
		}
	});

	return errors;
}
