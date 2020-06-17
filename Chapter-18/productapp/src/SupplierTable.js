import React, { Component } from 'react';
import { SupplierTableRow } from './SupplierTableRow';

export class SupplierTable extends Component {
  render() {
    return <table className="table table-sm table-stripped table-bordered">
      <thead>
        <tr>
          <th>ID</th><th>Name</th>
          <th>City</th><th>Products</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.suppliers.map(s =>
          <SupplierTableRow key={s.id} supplier={s}
            editCallback={this.props.editCallback}
            deleteCallback={this.props.deleteCallback} />)}
      </tbody>
    </table>
  }
}