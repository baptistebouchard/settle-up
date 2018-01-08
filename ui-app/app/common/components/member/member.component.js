'use strict';

import memberController from './member.controller';

export default {
  template: require('./member.html'),
  controller: memberController,
  bindings: {
    member: '<'
  }
}