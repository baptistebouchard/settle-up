'use strict';
// dependencies
import angular from 'angular';
import 'bootstrap';

// sass
import './sass/main.scss';

// app module declaration
angular.module('settle-up',
  [
    'settle-up.trip',
  ]);

// modules
require('./modules/trip');
