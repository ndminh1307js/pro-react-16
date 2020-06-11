import React from 'react';
import PropTypes from 'prop-types';

export function SimpleButton(props) {
	return (
		<button
			onClick={props.callback}
			className={props.className}
			disabled={props.disabled === 'true' || props.disabled === true}>
			{props.text}
		</button>
	);
}

SimpleButton.defaultProps = {
	disabled: false,
};

// PropTypes: array, bool, func, number, object, string

SimpleButton.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
