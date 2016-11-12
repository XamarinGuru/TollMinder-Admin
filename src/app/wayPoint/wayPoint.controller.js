export class WayPointController {
  constructor($mdDialog, $log, WayPointService, $state) {
    'ngInject';

    this.dialog = $mdDialog;
    this.log = $log;
    this.WayPoint = WayPointService;
    this.state = $state;

    this.tollPoints = [];
    this.query = {
      order: 'name',
      limit: 30,
      page: 1
    };

    //init

    this.getTollPoints();
  }

  getTollPoints() {
    this.WayPoint.get(this.state.params._id)
    .then(wayPoint => {
      wayPoint.data._tollPoints = wayPoint.data._tollPoints.map(item => {
        item.locationView = `${item.location.latitude}, ${item.location.longitude}`;
        return item;
      });
      this.wayPoint = wayPoint.data;
    })
    .catch(this.log.debug);
  }

  showModal(ev) {
    this.dialog.show({
      controller: 'NewTollPointController',
      controllerAs: 'dialog',
      templateUrl: 'app/modals/newTollPoint.html',
      targetEvent: ev,
      clickOutsideToClose:true
    })
  }

  remove(_id) {
    let confirm = this.dialog.confirm()
    .title('Are you sure?')
    .textContent('Would you like to delete this way point?')
    .ok('Yes')
    .cancel('No');

    this.dialog.show(confirm)
    .then(() => this.wayPoint.remove(_id))
    .then(() => this.state.reload())
    .catch(() => this.log.debug('canceled'));
  }
}
