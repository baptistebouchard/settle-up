'use strict';

import expenseController from './expense.controller';

export default {
  template: require('./expense.html'),
  controller: expenseController,
  bindings: {
    expense: '<'
  }
}