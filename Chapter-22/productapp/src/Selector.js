import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect }
  from 'react-router-dom';
import { ToggleLink } from './routing/ToggleLink';
import { RoutedDisplay } from './routing/RoutedDisplay';

export class Selector extends Component {

  render() {

    const routes = React.Children.map(this.props.children, child => ({
      component: child,
      name: child.props.name,
      url: `/${child.props.name.toLowerCase()}`,
      dataType: child.props.dataType
    }))

    return <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            {routes.map(r => <ToggleLink to={r.url} key={r.url}>{r.name}</ToggleLink>)}
          </div>
          <div className="col-10">
            <Switch>
              {routes.map(r => <Route key={r.url}
                path={`/:dataType(${r.dataType})/:mode?/:id?`}
                component={RoutedDisplay(r.dataType)} />)}
              <Redirect to={routes[0].url} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}