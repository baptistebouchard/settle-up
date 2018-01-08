'use strict';

import uuid from 'uuid';

class expense {
  constructor(description, amount) {
    this._id = uuid();
    this._description = description;
    this._amount = amount;
  }

  getAmount() {
    return this._amount;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

export default expense;