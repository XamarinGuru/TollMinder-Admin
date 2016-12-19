export class RatesController {
  constructor($state, $log, CrudService, $mdDialog, $scope) {
    'ngInject';

    this.state = $state;
    this.CRUD = CrudService;
    this.log = $log;
    this.dialog = $mdDialog;
    this.scope = $scope;

    this.matrixes = [];
    this.rates = [];
    this.load = false;
    this.getMatrixes();

    this._selectedMatrix = null;
    this.currentMatrix = null;

  }

  showModal(data, n) {
    if (n) localStorage.document = '';
    this.dialog.show({
      controller: 'MatrixController',
      controllerAs: 'dialog',
      templateUrl: 'app/views/modals/matrix.html',
      clickOutsideToClose: true,
      bindToController: true,
      preserveScope: true,
      locals: {
        data: data
      },
      closeTo : angular.element(document.querySelector('#hiddenModalButton'))
    })
  }

  getMatrixes() {
    this.CRUD.get('matrix')
    .then(res => {
      this.matrixes = res.data;
      this.load = true;
    })
  }

  selectMatrix() {
    this.currentMatrix = this.matrixes.filter(item => item._id == this._selectedMatrix)[0];
    this.CRUD.get('rate', this._selectedMatrix)
    .then(res => {
      this.rates = res.data.reduce((result, item) => {
        let {_id, cost, _startWayPoint, _endWayPoint} = item;
        result[`${_startWayPoint}|${_endWayPoint}`] = {_id, cost, editMode: false};
        return result;
      }, {});
      this.log.debug(this.rates);
    })
  }

  toggleEditMode(id) {
    this.rates[id].editMode = !this.rates[id].editMode
  }

  saveRate(id) {
    let {cost, _id} = this.rates[id];
    this.CRUD.save('rate', {cost, _id}, true)
    .then(res => this.rates[id].editMode = !this.rates[id].editMode);
  }

  removeMatrix() {
    this.dialog.show(
      this.dialog.confirm()
      .title('Would you like to delete this matrix?')
      .textContent('This action is irreversible!')
      .ok('Yes')
      .cancel('No')
    )
    .then(() => this.CRUD.remove('matrix', this._selectedMatrix))
    .then(res => this.state.reload());
  }

}
