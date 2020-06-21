import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter }
  from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';
import { RouteInfo } from './routing/RouteInfo';
import { ToggleLink } from './routing/ToggleLink';

const RouteInfoHOC = withRouter(RouteInfo);

export class Selector extends Component {

  renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

  render() {
    return <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ToggleLink to='/products'>Products</ToggleLink>
            <ToggleLink to='/Suppliers'>Suppliers</ToggleLink>
            <ToggleLink to='/info/match'>Match Info</ToggleLink>
            <ToggleLink to='/info/location'>Location Info</ToggleLink>
            <ToggleLink to='/info'>All Info</ToggleLink>
          </div>
          <div className="col-10">
            <RouteInfoHOC />
            <Switch>
              <Route path='/products' component={ProductDisplay} />
              <Route path='/suppliers' component={SupplierDisplay} />
              <Route path='/info/:datatype?' component={RouteInfo} />
              <Redirect to='/products' />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}