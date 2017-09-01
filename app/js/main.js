import angular from 'angular';
// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';
import 'angular-ui-bootstrap';
import 'angular-loading-bar';
import  io from 'socket.io-client';
import 'angular-socket-io';
import '../../node_modules/sweetalert/dist/sweetalert.min.js';
import 'angularjs-scroll-glue';
import 'angular-storage';
import 'angular-moment';
import 'angular-animate';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'ui.bootstrap',
  'angular-loading-bar',
  'btford.socket-io',
  'luegg.directives',
  'angular-storage',
  'angularMoment',
  'ngAnimate'
];


// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);
angular.module('app').constant('SocketIO', io);
angular.module('app').constant('moment', require('moment-timezone'));

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
