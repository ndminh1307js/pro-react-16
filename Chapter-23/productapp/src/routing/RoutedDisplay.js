import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EditorConnector } from '../store/EditorConnector';
import { TableConnector } from '../store/TableConnector';
import { PRODUCTS } from '../store/dataTypes';
import { ProductTable } from '../ProductTable';
import { ProductEditor } from '../ProductEditor';
import { SupplierTable } from '../SupplierTable';
import { SupplierEditor } from '../SupplierEditor';

export const RoutedDisplay = (dataType) => {
  const ConnectedEditor = EditorConnector(dataType,
    dataType === PRODUCTS ? ProductEditor : SupplierEditor);
  const ConnectedTable = TableConnector(dataType,
    dataType === PRODUCTS ? ProductTable : SupplierTable);

  return class extends Component {
    render() {
      const modeParam = this.props.match.params.mode;
      if (modeParam === 'edit' || modeParam === 'create') {
        return <ConnectedEditor key={this.props.match.params.id || -1} />
      } else {
        return <div className="m-2">
          <ConnectedTable />
          <div className="text-center m-2">
            <Link to={`/${dataType.toLowerCase()}/create`}
              className='btn btn-primary m-2'>Create</Link>
          </div>
        </div>
      }
    }
  }
}