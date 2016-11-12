export class NewWayPointController {
  constructor($mdDialog, WayPointService, $state, $log) {
    'ngInject';
    this.dialog = $mdDialog;
    this.WayPoint = WayPointService;
    this.log = $log;
    this.state = $state;

    this.newWayPoint = {
      _tollRoad: this.state.params._id,
      name: '',
      location : {
        latitude: 0,
        longitude: 0
      }
    };
  }
  save() {
    if (this.form.$valid) {
      this.WayPoint.save(this.newWayPoint)
      .then(_ => {
        this.log.debug(_);
        this.dialog.hide();
        this.state.reload()
      })
      .catch(this.log.debug);
    }
  }

  hide() {
    this.dialog.hide();
  }
}
