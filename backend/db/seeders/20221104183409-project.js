'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        title: 'test1',
        description: 'description test',
        genre: 'genre test',
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
    
  }
};
