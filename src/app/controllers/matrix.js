import {MainDialogController} from './mainDialog';

export class MatrixController extends MainDialogController {
  constructor($state, $log, CrudService, $mdDialog) {
    'ngInject';
    super();
    this.state = $state;
    this.CRUD = CrudService;
    this.log = $log;
    this.dialog = $mdDialog;
    this.selectedPoints = [];
    for (let i=0; i<2; i++) this.addPoint();

    this.load = true;
    this.getPoints();
  }

  getPoints() {
    this.CRUD.get('wayPoint')
    .then(res => this.points = res.data)
    .catch(this.log.debug);
  }

  querySearch(query) {
    if (this.points) {
      return this.points
      .filter(this.createFilterFor(query))
      .filter(item => {
        for (let point of this.selectedPoints) {
          if (point.object && point.object._id == item._id) return false;
        }
        return true;
      })
    }
  }

  createFilterFor(query) {
    if (!query) return () => true;
    var lowercaseQuery = angular.lowercase(query);
    return (item) => angular.lowercase(item.name).indexOf(lowercaseQuery) === 0
  }

  addPoint() {
    this.selectedPoints.push(new PointForMatrix)
  }

  deletePoint(index) {
    this.log.debug(index);
    if (this.selectedPoints.length > 2) this.selectedPoints.splice(index, 1)
  }

  save() {
    if (this.form.$valid) {
      let matrix = {
        name : this.name,
        wayPoints : this.selectedPoints.map(item => item.object._id)
      }
      this.CRUD.save('matrix', matrix)
      .then(res => {
        this.dialog.hide();
        this.state.reload();
      })
    }
  }
}

class PointForMatrix {
  constructor() {
    return {object:null, searchText:null}
  }
}
