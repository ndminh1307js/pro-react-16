import React, { Component } from 'react';

export function LogToConsole(
	FeatureComponent,
	label,
	logMount,
	logRender,
	logUnmount,
) {
	return class extends Component {
		componentDidMount() {
			if (logMount) {
				console.log(`${label}: Mount`);
			}
		}

		componentWillUnmount() {
			if (logMount) {
				console.log(`${label}: Unmount`);
			}
		}

		render() {
			if (logRender) {
				console.log(`${label}: Render`);
			}
			return <FeatureComponent {...this.props} />;
		}
	};
}
