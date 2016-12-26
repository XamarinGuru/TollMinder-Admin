import {MainDialogController} from './mainDialog';

export class MatrixController extends MainDialogController {
  constructor($state, $log, CrudService, $mdDialog) {
    'ngInject';
    super();
    this.state = $state;
    this.CRUD = CrudService;
    this.log = $log;
    this.dialog = $mdDialog;
    this.startWayPoints = [];
    this.endWayPoints = [];
    for (let i=0; i<2; i++) {
      this.addEndPoint();
      this.addStartPoint();
    }

    this.load = true;
    this.getPoints();
  }

  getPoints() {
    this.CRUD.get('wayPoint')
    .then(res => {
      this.points = res.data;
      let state = false;
      this.points.forEach(point => {
        if (point.name === 'Unknown') state = true;
      });
      if (!state) this.points.push({ name: 'Unknown'});
    })
    .catch(this.log.debug);
  }

  querySearch(query, selectedPoints) {
    if (this.points) {
      return this.points
      .filter(this.createFilterFor(query))
      .filter(item => {
        for (let point of selectedPoints) {
          if (point.object && point.object._id == item._id) return false;
        }
        return true;
      })
    }
  }

  createFilterFor(query) {
    if (!query) return () => true;
    let lowercaseQuery = angular.lowercase(query);
    return (item) => angular.lowercase(item.name).indexOf(lowercaseQuery) === 0
  }
  addStartPoint() {
    this.startWayPoints.push(new PointForMatrix);
  }
  addEndPoint() {
    this.endWayPoints.push(new PointForMatrix);
  }

  deleteStartPoint(index, ) {
    this.log.debug(index);
    if (this.startWayPoints.length > 1) this.startWayPoints.splice(index, 1)
  }
  deleteEndPoint(index, ) {
    this.log.debug(index);
    if (this.endWayPoints.length > 1) this.endWayPoints.splice(index, 1)
  }

  save() {
    if (this.form.$valid) {
      let matrix = {
        name: this.name,
        startWayPoints: this.startWayPoints.map(item => item.object._id ? item.object._id : item.object.name),
        endWayPoints: this.endWayPoints.map(item => item.object._id ? item.object._id : item.object.name)
      };
      this.CRUD.save('matrix', matrix)
      .then(res => {
        this.dialog.hide();
        this.state.reload();
      });
    }
  }
}

class PointForMatrix {
  constructor() {
    return {object:null, searchText:null}
  }
}
