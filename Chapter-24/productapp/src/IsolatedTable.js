import React, { Component } from 'react';
import { RestDataSource } from './webservice/RestDataSource';
import { Link } from 'react-router-dom';

export class IsolatedTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.dataSource = new RestDataSource('http://localhost:3500/api/products',
      (err) => this.props.history.push(`/error/${err}`));
  }

  deleteProduct(product) {
    this.dataSource.Delete(product, () => this.setState({
      products: this.state.products
        .filter(p => p.id !== product.id)
    }))
  }

  render() {
    return <table className="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th colSpan='5' className='bg-info text-white text-center h4 p-2'>
            (Isolated) Products
          </th>
        </tr>
        <tr>
          <th>ID</th><th>Name</th>
          <th>Category</th>
          <th className='text-right'>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.products.map(p =>
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td className='text-right text-danger'>
              ${Number(p.price).toFixed(2)}
            </td>
            <td className='text-center'>
              <Link to={`/isolated/edit/${p.id}`}
                className='btn btn-warning btn-sm'>
                Edit
              </Link>
              <button onClick={() => this.deleteProduct(p)}
                className='btn btn-danger btn-sm m-2'>
                Delete
              </button>
            </td>
          </tr>)}
      </tbody>
      <tfoot>
        <tr className="text-center">
          <td colSpan='5'>
            <Link to={`/isolated/create`} className='btn btn-primary'>
              Create
            </Link>
            <button className="btn btn-danger"
              onClick={() => this.dataSource.GetOne('err')}>
              Test Error
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  }

  componentDidMount() {
    this.dataSource.GetData(data => this.setState({ products: data }));
  }
}