export function config ($logProvider, $mdThemingProvider, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider.theme('default')
  .primaryPalette('blue-grey');

  $httpProvider.interceptors.push()
}

function authInterceptor(LoginService) {
  return {
    request: (config) => {
      if (localStorage.authToken) {

      } else {

      }
      return config;
    }
  }
}
