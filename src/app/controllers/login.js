export class LoginController {
  constructor(USERNAME, PASSWORD, $state) {
    'ngInject';

    this.constants = {USERNAME, PASSWORD};
    this.state = $state;

    this.username = '';
    this.password = '';
  }

  signin() {
    if(this.constants.USERNAME == this.username && this.constants.PASSWORD == this.password) {
      localStorage.auth = true;
      this.state.go('roadList');
    }
  }
}
