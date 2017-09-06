function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('ToolList', {
    url: '/',
    controller: 'ToolListController as toolListController',
    templateUrl: 'toolList.html',
    title: 'ToolList'
  });

  $stateProvider.state('HeadlightAiming', {
    url: '/tools/Headlight Aiming',
    controller: 'HeadlightAimingController as headlightAimingController',
    templateUrl: 'tools/headlightAiming.html',
    title: 'HeadlightAiming'
  });

  $stateProvider.state('Tyre Size', {
    url: '/tools/Tyre Size Calculator',
    controller: 'TyreSizeController as tyreSizeController',
    templateUrl: 'tools/tyreSize.html',
    title: 'TyreSize'
  });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
