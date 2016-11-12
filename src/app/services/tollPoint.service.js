export class TollPointService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }
  save(tollPoint) {
    return this.http.post(`${this.API}/tollPoint/`, tollPoint);
  }
  get(_id) {
    return _id ? this.http.get(`${this.API}/tollPoint/${_id}`) : this.http.get(`${this.API}/tollPoint`);
  }
}
