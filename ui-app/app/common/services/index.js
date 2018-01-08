'use strict';

import expenseService  from './expense.service';
import countService  from './count.service';
import memberService  from './expense.service';

angular.module('settle-up.common')
  .service('expenseService', expenseService)
  .service('countService', countService)
  .service('memberService', memberService);