'use strict';

export default function createRoutes(routerHelper) {
  const getStates = function getStates() {
    return [
      {
        name: 'trip',
        title: 'Trip',
        url: '/trip',
        component: 'trip',
      },
    ];
  };

  routerHelper.configureStates(getStates());
  routerHelper.configureOtherwise('/trip');
};

