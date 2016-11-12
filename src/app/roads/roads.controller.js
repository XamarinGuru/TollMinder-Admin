export class RoadsController {
  constructor($mdDialog, $log, RoadService, $state) {
    'ngInject';

    this.dialog = $mdDialog;
    this.log = $log;
    this.Road = RoadService;
    this.state = $state;

    this.roads = [];
    this.query = {
      order: 'name',
      limit: 30,
      page: 1
    };

    //init

    this.getRoads();
  }

  getRoads() {
    this.Road.get()
    .then(roads => this.roads = roads.data)
    .catch(this.log.debug);
  }

  showModal(ev) {
    this.dialog.show({
      controller: 'NewRoadController',
      controllerAs: 'dialog',
      templateUrl: 'app/modals/newRoad.html',
      targetEvent: ev,
      clickOutsideToClose:true
    })
  }

  remove(_id) {
    let confirm = this.dialog.confirm()
    .title('Are you sure?')
    .textContent('Would you like to delete this road?')
    .ok('Yes')
    .cancel('No');

    this.dialog.show(confirm)
    .then(() => this.Road.remove(_id))
    .then(() => this.state.reload())
    .catch(() => this.log.debug('canceled'));
  }
}
