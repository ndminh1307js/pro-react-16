import React, { Component } from 'react';
import { SupplierTable } from './SupplierTable';
import { SupplierEditor } from './SupplierEditor';

export class SupplierDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selected: null
    }
  }

  startEditting = (supplier) => {
    this.setState({ showEditor: true, selected: supplier });
  }

  createSupplier = () => {
    this.setState({ showEditor: true, selected: {} });
  }

  cancelEditting = () => {
    this.setState({ showEditor: false, selected: null });
  }

  saveSupplier = (supplier) => {
    this.props.saveCallback(supplier);
    this.setState({ showEditor: false, selected: null });
  }

  render() {
    if (this.state.showEditor) {
      return <SupplierEditor
        key={this.state.selected.id || -1}
        supplier={this.state.selected}
        saveCallback={this.saveSupplier}
        cancelCallback={this.cancelEditting} />
    } else {
      return <div className="m-2">
        <div className="text-center p-2">
          <button className='btn btn-primary m-1'
            onClick={this.createSupplier}>
            Create Supplier
          </button>
        </div>
        <SupplierTable suppliers={this.props.suppliers}
          editCallback={this.startEditting}
          deleteCallback={this.props.deleteCallback} />
      </div>
    }
  }
}