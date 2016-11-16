export class DialogController {
  constructor($mdDialog, CrudService, $state, $log, NgMap, $timeout) {
    'ngInject';
    this.upd = this.data ? true : false;
    this.dialog = $mdDialog;
    this.CRUD = CrudService;
    this.state = $state;
    this.log = $log;
    this.Map = NgMap;

    this.googleMapsUrl = 'https://maps.google.com/maps/api/js';
    this.pauseLoading = true;
    $timeout(() => {
      this.Map.getMap()
      .then(map => {
        this.map = map;
        this.pauseLoading = false;
      });
    }, 2000);

    this.schema = this.state.current.data.schema;
    this.document = {
      [`_${this.state.current.name}`] : this.state.params._id
    };
    if (this.data) this.document._id = this.data._id;
    this.schema.map(item => this.document[item.title] = this.data ? this.data[item.title] : item.value);


    this.clickOnMap = (event) => {
      if (this.document.hasOwnProperty('latitude')) this.document.latitude = event.latLng.lat();
      if (this.document.hasOwnProperty('longitude')) this.document.longitude = event.latLng.lng();
    };
  }
  save() {
    if (this.form.$valid) {
      this.CRUD.save(this.state.current.data.child, this.document, this.upd)
      .then(_ => {
        this.log.debug(_);
        this.dialog.hide();
        this.state.reload()
      })
      .catch(this.log.error);
    }
  }

  hide() {
    this.dialog.hide();
  }
}
