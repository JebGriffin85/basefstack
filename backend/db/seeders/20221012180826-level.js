'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        sequence: 'A,B,C',
        title: 'test',
        hintOne: 'hint1',
        hintTwo: 'hint2',
        hintThree: 'hint3',
        levelId: 1,
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};

