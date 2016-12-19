import {MainDialogController} from './mainDialog';

export class DialogController extends MainDialogController{
  constructor($mdDialog, CrudService, $state, $log, NgMap, $timeout, G_API_Key, StaticDataService) {
    'ngInject';
    super();
    let self = this;
    this.upd = this.data ? true : false;
    this.dialog = $mdDialog;
    this.CRUD = CrudService;
    this.state = $state;
    this.log = $log;
    this.Map = NgMap;

    this.load = true;

    this.googleMapsUrl = `https://maps.google.com/maps/api/js?key=${G_API_Key}&libraries=places`;
    this.pauseLoading = true;
    $timeout(() => {
      this.Map.getMap()
      .then(map => {
        this.map = map;
        this.pauseLoading = false;
      });
    }, 2000);


    this.search = '';
    this.schema = this.state.current.data.schema;
    this.document = {
      [`_${this.state.current.name}`] : this.state.params._id
    };
    if (this.data) this.document._id = this.data._id;

    this.schema.map(item => this.document[item.title] = this.data ? this.data[item.title] : item.value);
    this.document.latitude = this.document.latitude ||  parseFloat(localStorage.lastLtd) || 0;
    this.document.longitude = this.document.longitude ||  parseFloat(localStorage.lastLng) || 0;
    if (localStorage.document) this.document = JSON.parse(localStorage.document);

      this.clickOnMap = (event) => {
      if (this.document.hasOwnProperty('latitude')) this.document.latitude = event.latLng.lat();
      if (this.document.hasOwnProperty('longitude')) this.document.longitude = event.latLng.lng();
    };

    this.placeChanged = function (){
      self.place = this.getPlace();
      self.document.latitude = self.place.geometry.location.lat();
      self.document.longitude = self.place.geometry.location.lng();
    };

    if (this.state.current.name == 'roadList')
      StaticDataService.getStates()
      .then(res => {
        this.schema = this.schema.map(item => {
          if (item.title == 'state') item.options = res.data;
          return item;
        });
        this.log.debug(this.schema);
      });

    this.log.debug(this.state.current.name);
  }

  save() {
    if (this.form.$valid) {
      this.load = false;
      localStorage.lastLtd = this.document.latitude;
      localStorage.lastLng = this.document.longitude;
      this.CRUD.save(this.state.current.data.child, this.document, this.upd)
      .then(_ => {
        this.log.debug(_);
        this.dialog.hide();
        this.load = true;
        this.state.reload()
      })
      .catch(this.log.error);
    }
  }
}
