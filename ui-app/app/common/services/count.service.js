'use strict';

import orderBy from 'lodash/orderBy';
import omitBy from 'lodash/omitBy';

export default function countService() {
  const self = this;

  const _getTotalCount = function _getTotalCount(expensesByMember) {
    return expensesByMember.reduce((total, expense) => total + expense.getAmount());
  };

  const _getGlobalShareAmount = function _getShareAmount(total, membersCount) {
    return total / membersCount;
  };

  const _getShareAmount = function _get(globalShareAmount, giver, receiver) {
    const toReceive = receiver.getTotalExpensesAmount() - globalShareAmount - receiver.getTotalReceived();
    const toGive = globalShareAmount - giver.getTotalGiven() - giver.getTotalExpensesAmount();
    return toReceive < toGive ? toReceive : toGive;
  };

  const _getGivers = function _getGivers(members, globalShareAmount) {
    return  orderBy(
      omitBy(members, (member) => member.getTotalExpensesAmount() > globalShareAmount),
      (member) => member.getTotalExpensesAmount(),
      ['asc']
    );
  };

  const _getReceivers = function _getReceivers(member, globalShareAmount) {
    return orderBy(
      omitBy(members, (member) => member.getTotalExpensesAmount() < globalShareAmount),
      (member) => member.getTotalExpensesAmount(),
      ['desc']
    );
  };

  const _buildShares = function _buildShares(globalShareAmount, receivers, givers) {
    const shares = [];
    givers.forEach((giver) => {
      let receiverIndex = 0;
      while (giver.totalPaid < globalShareAmount) {
        const receiver = receivers[receiverIndex];
        const amount = _getShareAmount(globalShareAmount, receiver, giver);

        // We update amounts received and given in each users.
        giver.addAmountGiven(amount);
        receiver.addAmountReceived(amount);

        // we create and push the share.
        const share = new Share(amount, giver.id, receiver.id);
        shares.push(share);
        receiverIndex++;
      }
    });
  };

  self.getShares = function getShares(members) {
    const total = _getTotalCount(members.map((member) => member.getTotalExpensesAmount()));
    const shareAmount = _getGlobalShareAmount(total, members.length);
    const receivers = _getGivers(members, shareAmount);
    const givers = _getReceivers(members, shareAmount);
    return _buildShares(shareAmount, receivers, givers);
  };
}       