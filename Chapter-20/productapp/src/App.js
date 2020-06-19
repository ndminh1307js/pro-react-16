import React, { Component } from 'react';
import { Provider } from 'react-redux';
import dataStore from './store';
import { Selector } from './Selector';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';
import { StoreAccess } from './store/StoreAccess';
import { CustomConnector, CustomConnectorProvider } from './store/CustomConnector';
import { startEdittingProduct } from './store/stateActions';
import { ProductTable } from './ProductTable';
import { deleteProduct } from './store/modelActionCreators';

const selectors = {
  products: (store) => store.modelData.products
}

const dispatchers = {
  editCallback: startEdittingProduct,
  deleteCallback: deleteProduct
}

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <StoreAccess store={dataStore} />
          </div>
          <div className="col">
            <Provider store={dataStore}>
              <Selector>
                <ProductDisplay name='Products' />
                <SupplierDisplay name='Suppliers' />
              </Selector>
            </Provider>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CustomConnectorProvider dataStore={dataStore}>
              <CustomConnector selectors={selectors} dispatchers={dispatchers}>
                <ProductTable />
              </CustomConnector>
            </CustomConnectorProvider>
          </div>
        </div>
      </div>
    )
  }
}

