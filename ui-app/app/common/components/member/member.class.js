'use strict';

import uuid from 'uuid';
import remove from 'lodash/remove';

class member {

  constructor(name) {
    this._expenses = [];
    this._id = uuid();
    this._name = name;
    this._totalGiven = 0;
    this._totalReceived = 0;
  }

  addExpense(expense) {
    this._expenses.push(expense);
  }

  removeExpense(id) {
    remove(this._expenses, (expense) => expense.getId() === id);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get expenses() {
    return this._expenses;
  }

  set expenses(value) {
    this._expenses = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  getTotalExpensesAmount() {
    return this._expenses.reduce((total, expense) => total + expense.getAmount());
  }

  get totalGiven() {
    return this._totalGiven;
  }

  get totalReceived() {
    return this._totalReceived;
  }

  set addAmountGiven(amount) {
    this._totalGiven += amount;
  }

  set addAmountReceived(amount) {
    this._totalReceived += amount;
  }
}

export default member;