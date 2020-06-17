import React, { Component } from 'react';
import { ProductTableRow } from './ProductTableRow';

export class ProductTable extends Component {
  render() {
    return <table className="table table-stripped table-bordered table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th className='text-right'>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.products.map(p =>
            <ProductTableRow key={p.id} product={p}
              editCallback={this.props.editCallback}
              delete={this.props.deleteCallback} />)
        }
      </tbody>
    </table>
  }
}