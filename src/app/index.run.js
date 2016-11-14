export function runBlock ($log, $rootScope, $state ) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    if (!localStorage.auth) {
      $state.go('login');
    }
  });
  $log.debug('runBlock end');
};
