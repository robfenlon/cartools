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

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
