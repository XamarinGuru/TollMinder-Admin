export function runBlock ($log, $rootScope, $state ) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', () => {
    if (!localStorage.authToken) {
      $state.go('login');
    }
  });
  $log.debug('runBlock end');
}
