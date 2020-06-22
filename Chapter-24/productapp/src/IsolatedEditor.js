import React, { Component } from 'react';
import { RestDataSource } from './webservice/RestDataSource';
import { ProductEditor } from './ProductEditor';

export class IsolatedEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataItem: {}
    };
    this.dataSource = this.props.dataSource
      || new RestDataSource('http://localhost:3500/api/products',
        (err) => this.props.history.push(`/error/${err.message}`));
  }

  save = (data) => {
    const callback = () => this.props.history.push('/isolated');
    if (data.id === '') {
      this.dataSource.Store(data, callback);
    } else {
      this.dataSource.Update(data, callback);
    }
  }

  cancel = () => this.props.history.push('/isolated');

  render() {
    return <ProductEditor key={this.state.dataItem.id || -1}
      product={this.state.dataItem} saveCallback={this.save}
      cancelCallback={this.cancel} />
  }

  componentDidMount() {
    if (this.props.match.params.mode === 'edit') {
      this.dataSource.GetOne(this.props.match.params.id,
        data => this.setState({ dataItem: data }));
    }
  }
}