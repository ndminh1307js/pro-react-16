import Axios from 'axios';

export class RestDataSource {

  constructor(baseUrl, errorCallback) {
    this.BASE_URL = baseUrl;
    this.handleError = errorCallback;
  }

  GetData(callback) {
    this.SendRequest('get', this.BASE_URL, callback);
  }

  async GetOne(id, callback) {
    this.SendRequest('get', `${this.BASE_URL}/${id}`, callback);
  }

  async Store(data, callback) {
    this.SendRequest('post', this.BASE_URL, callback, data);
  }

  async Update(data, callback) {
    this.SendRequest('put', `${this.BASE_URL}/${data.id}`, callback, data);
  }

  async Delete(data, callback) {
    this.SendRequest('delete', `${this.BASE_URL}/${data.id}`)
  }

  async SendRequest(method, url, callback, data) {
    try {
      callback((await Axios.request({
        method, url, data
      })).data);
    } catch (err) {
      this.handleError('Operation Failed: Network Error');
    }
  }
}