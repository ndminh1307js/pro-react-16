import React, { Component } from 'react';

export class ProductTable extends Component {
  render() {
    return <table className='table table-stripped table-bordered table-sm'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th className='text-right'>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.props.products.map(p =>
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td className="text-right">{(+p.price).toFixed(2)}</td>
          </tr>)}
      </tbody>
    </table>
  }
}