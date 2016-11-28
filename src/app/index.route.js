export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.html5Mode = true;
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginController',
    controllerAs: 'ctrl'
  })
  .state('roadList', {
    url: '/',
    templateUrl: 'app/views/roadList.html',
    controller: 'RoadListController',
    controllerAs: 'ctrl',
    data: {
      schema: [
        {title: 'name', value: '', type: 'text'}
      ],
      child: 'tollRoad'
    }
  })
  .state('tollRoad', {
    url: '/tollRoad/{_id}',
    templateUrl: 'app/views/entity.html',
    controller: 'EntityController',
    controllerAs: 'ctrl',
    data: {
      schema: [
        {title: 'name', value: '', type: 'text'},
        {title: 'latitude', value: 0, type: 'number'},
        {title: 'longitude', value: 0, type: 'number'}
      ],
      thead: ['Way Point name', 'Latitude', 'Longitude'],
      tbody: ['name', 'latitude', 'longitude'],
      child: 'wayPoint',
      back: 'home'
    }
  })
  .state('wayPoint', {
    url: '/wayPoint/{_id}',
    templateUrl: 'app/views/entity.html',
    controller: 'EntityController',
    controllerAs: 'ctrl',
    data: {
      schema: [
        {title: 'name', value: '', type: 'text'},
        {title: 'latitude', value: 0, type: 'number'},
        {title: 'longitude', value: 0, type: 'number'},
        {title: 'action', value: 'exit', type: 'select', options: ['entrance','bridge','exit']}
      ],
      thead: ['Toll Point name', 'Latitude', 'Longitude', 'Action'],
      tbody: ['name', 'latitude', 'longitude', 'action'],
      child: 'tollPoint'
    }
  });

  $urlRouterProvider.otherwise('/');
}
