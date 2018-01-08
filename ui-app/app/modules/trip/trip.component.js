'use strict';

import tripController from './trip.controller';

export default {
  template: require('./trip.html'),
  controller: tripController,
  bindings: {
    members: '<'
  }
}