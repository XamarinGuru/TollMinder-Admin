export class LoginController {
  constructor(LoginService, $state, $log) {
    'ngInject';
    this.state = $state;
    this.Login = LoginService;
    this.log = $log;

    this.username = '';
    this.password = '';
  }

  signin() {
    if (this.form.$valid) {
      this.Login.auth(this.username, this.password)
      .then(response => {
        localStorage.authToken = response.data.token;
        this.state.go('roadList');
      })
      .catch(response => this.err = response.data.err);
    }
  }
}
