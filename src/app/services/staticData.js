export class StaticDataService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }

  getStates() {
    return this.http.get(`${this.API}/tollRoad/states`)
  }

}
