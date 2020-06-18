import React, { Component } from 'react';

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: React.Children.toArray(props.children)[0].props.name
    }
  }

  setSelection = (event) => {
    event.persist();
    this.setState({ selection: event.target.name });
  }

  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          {React.Children.map(this.props.children, c =>
            <button name={c.props.name}
              onClick={this.setSelection}
              className={`btn btn-block
            ${this.state.selection === c.props.name
                  ? 'btn-primary active'
                  : 'btn-secondary'}`}>
              {c.props.name}
            </button>)}
        </div>
        <div className="col-10">
          {
            React.Children.toArray(this.props.children)
              .filter(c => c.props.name === this.state.selection)
          }
        </div>
      </div>
    </div>
  }
}