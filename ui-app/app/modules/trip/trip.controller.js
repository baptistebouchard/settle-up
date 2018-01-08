'use strict';

import Member from '../../common/components/member/member.class';

export default function tripController($uibModal) {
  const self = this;

  self.$onInit = function $onInit() {
    self.members = [
      new Member('baptiste')
    ];
  };

  self.addMember = function addMember() {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      templateUrl: 'stackedModal.html',
      size: 'sm',
    });
  };
};