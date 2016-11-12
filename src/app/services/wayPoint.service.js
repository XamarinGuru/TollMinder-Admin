export class WayPointService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }
  save(wayPoint) {
    return this.http.post(`${this.API}/wayPoint/`, wayPoint);
  }
  get(_id) {
    return _id ? this.http.get(`${this.API}/wayPoint/${_id}`) : this.http.get(`${this.API}/wayPoint`);
  }
}
