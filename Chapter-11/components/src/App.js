import React from 'react';
import { Summary } from './Summary';

let names = ['Jess', 'Emily', 'Matt'];

function reverseNames() {
	names.reverse();
}

function promoteName(name) {
	names = [name, ...names.filter(val => val !== name)];
}

export default function App() {
	return (
		<table className='table table-sm table-stripped'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Letters</th>
				</tr>
			</thead>
			<tbody>
				{names.map((name, index) => (
					<tr key={name} className='p-2'>
						<Summary
							index={index}
							name={name}
							reverseCallback={reverseNames}
							promoteCallback={promoteName}
						/>
					</tr>
				))}
			</tbody>
		</table>
	);
}
