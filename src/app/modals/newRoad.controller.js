export class NewRoadController {
  constructor($mdDialog, RoadService, $state, $log) {
    'ngInject';
    this.dialog = $mdDialog;
    this.Road = RoadService;
    this.newRoad = {
      name: ''
    };
    this.log = $log;
    this.state = $state;
  }
  save() {
    if (this.form.$valid) {
      this.Road.save(this.newRoad)
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
