export class RoadService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }
  save(road) {
    return this.http.post(`${this.API}/tollRoad/`, road);
  }
  get(_id) {
    return _id ? this.http.get(`${this.API}/tollRoad/${_id}`) : this.http.get(`${this.API}/tollRoad`);
  }
  remove(_id) {
    return this.http.delete(`${this.API}/tollRoad/${_id}`);
  }
}
