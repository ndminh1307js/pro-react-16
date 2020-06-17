import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
import { ProductEditor } from './ProductEditor';

export class ProductDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selectedProduct: null
    }
  }

  startEditting = product => {
    this.setState({ showEditor: true, selectedProduct: product });
  }

  createProduct = () => {
    this.setState({ showEditor: true, selectedProduct: {} });
  }

  cancelEditting = () => {
    this.setState({ showEditor: false, selectedProduct: {} });
  }

  saveProduct = product => {
    this.props.saveCallback(product);
    this.setState({ showEditor: false, selectedProduct: null });
  }

  render() {
    if (this.state.showEditor) {
      return <ProductEditor
        key={this.state.selectedProduct.id || -1}
        product={this.state.selectedProduct}
        saveCallback={this.saveProduct}
        cancelCallback={this.cancelEditting} />
    } else {
      return <div className="m-2">
        <div className="text-center">
          <button className="btn btn-primary"
            onClick={this.createProduct}>
            Create Product
          </button>
        </div>
        <ProductTable products={this.props.product}
          editCallback={this.startEditting}
          deleteCallback={this.props.deleteCallback} />
      </div>
    }
  }
}