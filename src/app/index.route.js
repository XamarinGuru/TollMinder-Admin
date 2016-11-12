export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/roads/roads.html',
    controller: 'RoadsController',
    controllerAs: 'roads'
  })
  .state('road', {
    url: '/road/{_id}',
    templateUrl: 'app/road/road.html',
    controller: 'RoadController',
    controllerAs: 'road'
  })
  .state('wayPoint', {
    url: '/wayPoint/{_id}',
    templateUrl: 'app/wayPoint/wayPoint.html',
    controller: 'WayPointController',
    controllerAs: 'wayPoint'
  });
  $urlRouterProvider.otherwise('/');
}
