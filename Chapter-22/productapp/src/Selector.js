import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Prompt }
  from 'react-router-dom';
import { ToggleLink } from './routing/ToggleLink';
import { CustomPrompt } from './routing/CustomPrompt';

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
    const routes = React.Children.map(this.props.children, child => ({
      component: child,
      name: child.props.name,
      url: `/${child.props.name.toLowerCase()}`
    }))
    return <Router getUserConfirmation={this.customGetUserConfirmation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            {routes.map(r => <ToggleLink to={r.url} key={r.url}>{r.name}</ToggleLink>)}
          </div>
          <div className="col-10">
            <CustomPrompt show={this.state.showPrompt}
              message={this.state.message}
              callback={this.state.callback} />
            <Prompt message={location => `Do you want to navigate to ${location.pathname}`} />
            <Switch>
              {routes.map(r => <Route key={r.url} path={r.url} render={() => r.component} />)}
              <Redirect to={routes[0].url} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}