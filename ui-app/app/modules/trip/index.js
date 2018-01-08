'use strict';

import createRoutes from './trip.route';
import tripComponent from './trip.component';

require('../../common');

angular.module('settle-up.trip', [
  'settle-up.common',
])
  .component('trip', tripComponent)
  .run(createRoutes);