import React, { Component } from 'react';

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.formElements = {
      name: { label: 'Name', name: 'name' },
      category: { label: 'Category', name: 'category' },
      price: { label: 'Price', name: 'price' }
    }
  }

  setElement = (element) => {
    if (element !== null) {
      this.formElements[element.name].element = element;
    }
  }

  handleAdd = () => {
    let data = {};
    Object.values(this.formElements)
      .forEach(v => {
        data[v.element.name] = v.element.value;
        v.element.value = '';
      })
    this.props.callback(data);
    this.formElements.name.element.focus();
  }

  render() {
    return <React.Fragment>
      {Object.values(this.formElements).map(elem =>
        <div className="form-group p-2">
          <label>{elem.label}</label>
          <input className='form-control' name={elem.name}
            onChange={this.handleChange} ref={this.setElement} />
        </div>
      )}

      <div class='text-center p-2'>
        <button className="btn btn-primary btn-block btn-big"
          onClick={this.handleAdd}>
          Add
        </button>
      </div>
    </React.Fragment>
  }
}