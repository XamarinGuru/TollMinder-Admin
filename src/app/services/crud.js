export class CrudService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }
  save(entity, data, upd) {
    return upd
      ? this.http.put(`${this.API}/${entity}/${data._id}`, data)
      : this.http.post(`${this.API}/${entity}/`, data);
  }
  get(entity, _id) {
    return _id
      ? this.http.get(`${this.API}/${entity}/${_id}`)
      : this.http.get(`${this.API}/${entity}`);
  }
  remove(entity, _id) {
    return this.http.delete(`${this.API}/${entity}/${_id}`);
  }
}
