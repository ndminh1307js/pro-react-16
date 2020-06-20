import React, { Component } from 'react';

export class RouteInfo extends Component {

  renderTable(title, prop, propertyNames) {
    return <React.Fragment>
      <tr><th colspan='2' className='text-center'>{title}</th></tr>
      {propertyNames.map(p =>
        <tr key={p}>
          <td>{p}</td>
          <td>{JSON.stringify(prop[p])}</td>
        </tr>)}
    </React.Fragment>
  }

  render() {
    return <div className="bg-info m-2 p-2">
      <h4 className="text-white text-center">
        Route Info
      </h4>
      <table className='table table-sm table-striped bg-light'>
        {this.renderTable('Match', this.props.match, ['url', 'path', 'params', 'isExact'])}
      </table>
    </div>
  }
}