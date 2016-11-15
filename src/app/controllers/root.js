export class RootController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  logout() {
    localStorage.authToken = '';
    this.state.go('login');
  }
}
