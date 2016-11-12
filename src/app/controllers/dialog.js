export class DialogController {
  constructor($mdDialog, CrudService, $state, $log) {
    'ngInject';
    this.upd = this.data ? true : false;
    this.dialog = $mdDialog;
    this.CRUD = CrudService;
    this.state = $state;
    this.log = $log;

    this.schema = this.state.current.data.schema;
    this.document = {
      [`_${this.state.current.name}`] : this.state.params._id
    };
    if (this.data) this.document._id = this.data._id;
    this.schema.map(item => this.document[item.title] = this.data ? this.data[item.title] : item.value);
    this.log.debug(this.data);

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
