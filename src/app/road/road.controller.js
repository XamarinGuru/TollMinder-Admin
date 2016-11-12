export class RoadController {
  constructor($mdDialog, $log, RoadService, $state) {
    'ngInject';

    this.dialog = $mdDialog;
    this.log = $log;
    this.state = $state;

    this.road = {};

    //init

    this.getRoads(RoadService);
  }

  getRoads(RoadService) {
    RoadService.get(this.state.params._id)
    .then(road => {
      road.data._wayPoints = road.data._wayPoints.map(item => {
        item.locationView = `${item.location.latitude}, ${item.location.longitude}`;
        return item;
      });
      this.road = road.data;
    })
    .catch(this.log.debug);
  }

  showModal(ev) {
    this.dialog.show({
      controller: 'NewWayPointController',
      controllerAs: 'dialog',
      templateUrl: 'app/modals/newWayPoint.html',
      targetEvent: ev,
      clickOutsideToClose:true
    })
  }
}
