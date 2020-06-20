import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect }
  from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';
import { RouteInfo } from './routing/RouteInfo';

export class Selector extends Component {

  renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

  render() {
    return <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/products'>Products</NavLink>
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/suppliers'>Suppliers</NavLink>
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/info'>Route Info</NavLink>
          </div>
          <div className="col-10">
            <Switch>
              <Route path='/products' component={ProductDisplay} />
              <Route path='/suppliers' component={SupplierDisplay} />
              <Route path='/info' component={RouteInfo} />
              <Redirect to='/products' />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}