import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Prompt }
  from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';
import { RouteInfo } from './routing/RouteInfo';
import { ToggleLink } from './routing/ToggleLink';
import { CustomPrompt } from './routing/CustomPrompt';

const RouteInfoHOC = withRouter(RouteInfo);

export class Selector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPrompt: false,
      message: '',
      callback: () => { }
    }
  }

  customGetUserConfirmation = (message, navCallback) => {
    this.setState({
      showPrompt: true,
      message,
      callback: (allow) => {
        navCallback(allow);
        this.setState({ showPrompt: false })
      }
    })
  }

  renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

  render() {
    return <Router getUserConfirmation={this.customGetUserConfirmation}>
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
            <CustomPrompt show={this.state.showPrompt}
              message={this.state.message}
              callback={this.state.callback} />
            <Prompt message={location => `Do you want to navigate to ${location.pathname}`} />
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