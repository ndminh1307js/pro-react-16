import React, { Component } from 'react';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';
import { Selector } from './Selector';

export class ProductsAndSuppliers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Until Dawn', category: 'PS4 Games', price: 60 },
        { id: 2, name: 'Counter-Strike: Global Offensive', category: 'Steam Games', price: 12 },
        { id: 3, name: 'Horizon Forbidden West', category: 'PS5 Games', price: 65 }
      ],
      suppliers: [
        { id: 1, name: 'Valve', city: 'Washington', products: [2] },
        { id: 2, name: 'Sony', city: 'Tokyo', products: [1, 3] }
      ]
    }
    this.idCounter = 100;
  }

  saveData = (collection, item) => {
    if (item.id === '') {
      item.id = this.idCounter++;
      this.setState(state =>
        state[collection] = state[collection].concat(item));
    } else {
      this.setState(state =>
        state[collection]
        = state[collection].map(stored => stored.id === item.id ? item : stored));
    }
  }

  deleteData = (collection, item) => {
    this.setState(state => state[collection]
      = state[collection].filter(stored => stored.id !== item.id));
  }

  render() {
    return <div>
      <Selector>
        <ProductDisplay
          name='Products'
          products={this.state.products}
          saveCallback={p => this.saveData('products', p)}
          deleteCallback={p => this.deleteData('products', p)} />
        <SupplierDisplay
          name='Suppliers'
          suppliers={this.state.suppliers}
          saveCallback={s => this.saveData('suppliers', s)}
          deleteCallback={s => this.deleteData('suppliers', s)} />
      </Selector>
    </div>
  }
}