import React, { Component } from 'react';

export class SimpleButton extends Component {
	render() {
		return (
			<button
				onClick={this.props.callback}
				className={this.props.className}
				disabled={
					this.props.disabled === 'true' || this.props.disabled === true
				}>
				{this.props.text}
			</button>
		);
	}
}
