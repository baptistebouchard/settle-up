'use strict';

import uuid from 'uuid';

class share {
  constructor(giver, receiver, amount) {
    this._id = uuid();
    this._giver = giver;
    this._receiver = receiver;
    this._amount = amount;
    this._settled = false;
  }

  get giver() {
    return this._giver;
  }

  set giver(value) {
    this._giver = value;
  }

  get receiver() {
    return this._receiver;
  }

  set receiver(value) {
    this._receiver = value;
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

  get settled() {
    return this._settled;
  }

  set settled(value) {
    this._settled = value;
  }
}

export default share;