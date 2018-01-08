'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import modale from 'angular-ui-bootstrap/src/modal';

angular.module('settle-up.common', [
  uiRouter,
  ngAnimate,
  modale
]);

require('./components');
require('./services');
require('./helpers');
