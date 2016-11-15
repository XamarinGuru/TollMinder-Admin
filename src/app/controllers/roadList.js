export class RoadListController {
  constructor($mdDialog, $log, CrudService, $state) {
    'ngInject';

    this.dialog = $mdDialog;
    this.log = $log;
    this.CRUD = CrudService;
    this.state = $state;

    this.roads = [];
    this.limit = 20;
    this.page = 1;

    //init

    this.getRoads();
  }

  getRoads() {
    this.CRUD.get('tollRoad')
    .then(roads => this.roads = roads.data)
    .catch(this.log.debug);
  }

  showModal(data) {
    this.dialog.show({
      controller: 'DialogController',
      controllerAs: 'dialog',
      templateUrl: 'app/views/modals/dialog.html',
      clickOutsideToClose:true,
      bindToController: true,
      locals : {
        data: data
      }
    })
  }

  remove(_id) {
    let confirm = this.dialog.confirm()
    .title('Are you sure?')
    .textContent('Would you like to delete this road?')
    .ok('Yes')
    .cancel('No');

    this.dialog.show(confirm)
    .then(() => this.CRUD.remove('tollRoad', _id))
    .then(() => this.state.reload())
    .catch(() => this.log.debug('canceled'));
  }
}
