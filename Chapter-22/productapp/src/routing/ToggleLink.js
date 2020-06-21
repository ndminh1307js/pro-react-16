import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export class ToggleLink extends Component {
  render() {
    return <Route path={this.props.to} exact={this.props.exact}
      children={routeProps => {
        const baseClasses = this.props.className || 'btn btn-block m-2';
        const activeClass = this.props.activeClass || 'btn-primary';
        const inactiveClass = this.props.inactiveClass || 'btn-secondary';

        const combinedClasses =
          `${baseClasses} ${routeProps.match ? activeClass : inactiveClass}`;

        return <Link to={this.props.to} className={combinedClasses}>
          {this.props.children}
        </Link>
      }}
    />
  }
}