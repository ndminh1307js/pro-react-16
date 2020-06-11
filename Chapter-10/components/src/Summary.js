import React from 'react';
import { CallbackButton } from './CallbackButton';

export function Summary(props) {
	return (
		<React.Fragment>
			<td>{props.index + 1}</td>
			<td>{props.name}</td>
			<td>{props.name.length}</td>
			<td>
				<CallbackButton callback={props.reverseCallback} />
				<CallbackButton
					theme='secondary'
					callback={() => props.promoteCallback(props.name)}
					text='Promote'
					disabled='true'
				/>
			</td>
		</React.Fragment>
	);
}
