import React, { Component } from 'react';
import { ForwardFormField } from './FormField';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.fieldRef = React.createRef();
  }

  handleClick = () => {
    this.fieldRef.current.focus();
  }

  render() {
    return <div className='text-center m-2'>
      <ForwardFormField label='Name' ref={this.fieldRef} />
      <div className="text-center m-2">
        <button className="btn btn-primary" onClick={this.handleClick}>
          Focus
        </button>
      </div>
    </div>
  }
}

