import React from 'react';
import ReactDOM from 'react-dom';
import { Summary } from './Summary';

let names = ['Jess', 'Emily', 'Matt'];

function reverseNames() {
	names.reverse();
	ReactDOM.render(<App />, document.getElementById('root'));
}

function promoteName(name) {
	names = [name, ...names.filter(val => val !== name)];
	ReactDOM.render(<App />, document.getElementById('root'));
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
