import React, { Component } from 'react';

export class SimpleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// counter: 0,
			hasButtonBeenClicked: false,
		};
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				className={this.props.className}
				disabled={
					this.props.disabled === 'true' || this.props.disabled === true
				}>
				{this.props.text} {this.props.counter}
				{this.state.hasButtonBeenClicked && <p>Button Clicked!</p>}
			</button>
		);
	}

	handleClick = () => {
		this.props.incrementCallback(5);
		this.setState({ hasButtonBeenClicked: true })
		this.props.callback();
	};
}
