'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Acquisitions', [
      {
        repoLink: 'repo test',
        projectId: 1,
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Acquisitions', null, {});

  }
};
