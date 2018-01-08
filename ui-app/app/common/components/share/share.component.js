'use strict';

import shareController from './share.controller';

export default {
  template: require('./share.html'),
  controller: shareController,
  bindings: {
    share: '<'
  }
}