export class EntityController {
  constructor($mdDialog, $log, CrudService, $state) {
    'ngInject';

    this.dialog = $mdDialog;
    this.log = $log;
    this.state = $state;
    this.CRUD = CrudService;
    this.mappingField = null;
    this.data = {};

    this.log.debug(this.state);

    //init

    this.getEntity();
  }

  getEntity() {
    this.CRUD.get(this.state.current.name, this.state.params._id)
    .then(response => {
      if (response.data.hasOwnProperty('_wayPoints')) this.mappingField = '_wayPoints';
      if (response.data.hasOwnProperty('_tollPoints')) this.mappingField = '_tollPoints';
      this.data = response.data;
    })
    .catch(this.log.error);
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
    .textContent(`Would you like to delete this ${this.state.current.data.child}?`)
    .ok('Yes')
    .cancel('No');

    this.dialog.show(confirm)
    .then(() => this.CRUD.remove(this.state.current.data.child, _id))
    .then(() => this.state.reload())
    .catch(() => this.log.debug('canceled'));
  }
}