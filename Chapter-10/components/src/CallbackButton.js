import React from 'react';
import { SimpleButton } from './SimpleButton';

export function CallbackButton(props) {
	return (
		<SimpleButton {...props} className={`btn btn-sa btn-${props.theme}`} />
	);
}

CallbackButton.defaultProps = {
	text: 'Default Text',
	theme: 'warning',
};
