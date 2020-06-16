import React, { Component } from 'react';
import { Editor } from './Editor';
import { ProductTable } from './ProductTable';
import { ColorInvalidElements } from './jQueryColorizer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.editorRef = React.createRef();
  }

  addProduct = (product) => {
    if (this.state.products.indexOf(product.name) === -1) {
      this.setState(state => state.products.push(product));
    }
  }

  colorFields = () => {
    ColorInvalidElements(this.editorRef.current);
  }

  render() {
    return <div>
      <div className="text-center m-2">
        <button className="btn btn-primary" onClick={this.colorFields}>
          jQuery
        </button>
      </div>
      <div ref={this.editorRef}>
        <Editor callback={this.addProduct} />
      </div>
      <h6 className="bg-secondary text-white m-2 p-2">
        <div className="m-2">
          {
            this.state.products.length === 0
              ? <div className="text-center">No Products</div>
              : <ProductTable products={this.state.products} />
          }
        </div>
      </h6>
    </div>
  }
}

