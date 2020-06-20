import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect }
  from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export class Selector extends Component {

  renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

  render() {
    return <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active' exact={true}
              to='/'>Default URL</NavLink>
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/products'>Products</NavLink>
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/suppliers'>Suppliers</NavLink>
            <NavLink className='btn btn-primary btn-block m-2'
              activeClassName='active'
              to='/old/data'>Old NavLink</NavLink>
          </div>
          <div className="col-10">
            <Switch>
              <Route path='/products' component={ProductDisplay} />
              <Route path='/suppliers' component={SupplierDisplay} />
              <Redirect from='/old/data' to='/suppliers' />
              <Redirect to='/products' />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}