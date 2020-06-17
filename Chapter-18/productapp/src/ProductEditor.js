import React, { Component } from 'react';

export class ProductEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: this.props.id || '',
        name: this.props.name || '',
        category: this.props.category || '',
        price: this.props.price || ''
      }
    }
  }

  handleChange = event => {
    event.persist();
    this.setState(state => state.formData[event.target.name] = event.target.value);
  }

  handleClick = () => {
    this.props.saveCallback(this.state.formData);
  }

  render() {
    return <div className="m-2">
      <div className="form-group">
        <label>ID</label>
        <input className='form-control' name='id'
          disabled
          value={this.state.formData.id}
          onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input className='form-control' name='name'
          value={this.state.formData.name}
          onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input className='form-control' name='category'
          value={this.state.formData.category}
          onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input className='form-control' name='price'
          value={this.state.formData.price}
          onChange={this.handleChange} />
      </div>
      <div className="text-center">
        <button className="btn btn-primary"
          onClick={this.handleClick}>
          Save
        </button>
        <button className="btn btn-secondary"
          onClick={this.props.cancelCallback}>
          Cancel
        </button>
      </div>
    </div>
  }
}