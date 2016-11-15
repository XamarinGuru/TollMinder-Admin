export class LoginService {
  constructor($http, API) {
    'ngInject';

    this.http = $http;
    this.API = API;
  }

  auth(name, password) {
    return this.http.post(`${this.API}/user/adminAuth`, {name, password});
  }
}
