import React, { Component } from 'react';
import { SupplierTable } from './SupplierTable';
import { SupplierEditor } from './SupplierEditor';
import { connect } from 'react-redux';
import { EditorConnector } from './store/EditorConnector';
import { startCreatingSupplier } from './store/stateActions';
import { TableConnector } from './store/TableConnector';
import { SUPPLIERS } from './store/dataTypes';

const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = (storeData) => ({
  editting: storeData.stateData.editting,
  selected: (storeData.modelData.suppliers
    .find(s => s.id === storeData.stateData.selectedId)) || {}
});

const mapDispatchToProps = {
  createSupplier: startCreatingSupplier
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connectFunction(
  class extends Component {
    render() {
      if (this.props.editting) {
        return <ConnectedEditor key={this.props.selected.id || -1} />
      } else {
        return <div className="m-2">
          <div className="text-center p-2">
            <button className='btn btn-primary m-1'
              onClick={this.props.createSupplier}>
              Create Supplier
          </button>
          </div>
          <ConnectedTable needSuppliers={true} />
        </div>
      }
    }
  })