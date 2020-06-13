import React from 'react';

export function Message(props) {
	let classes;

	switch (props.name) {
		case 'Chris':
			classes = 'bg-warning p-2';
			break;
		case 'Ashley':
			classes = 'bg-secondary text-center text-white p-2';
			break;
		default:
			classes = 'bg-success text-center text-white p-2';
	}

	return (
		<h4 className={classes}>
			{props.greeting}, {props.name}
		</h4>
	);
}
