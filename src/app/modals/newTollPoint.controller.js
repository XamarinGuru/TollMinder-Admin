export class NewTollPointController {
  constructor($mdDialog, TollPointService, $state, $log) {
    'ngInject';
    this.dialog = $mdDialog;
    this.TollPoint = TollPointService;
    this.log = $log;
    this.state = $state;

    this.actions = [
      'entrance',
      'bridge',
      'exit'
    ];

    this.newTollPoint = {
      _wayPoint: this.state.params._id,
      name: '',
      location : {
        latitude: 0,
        longitude: 0
      },
      action: 'exit'
    };
  }
  save() {
    if (this.form.$valid) {
      this.TollPoint.save(this.newTollPoint)
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
