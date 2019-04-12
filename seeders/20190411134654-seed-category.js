'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [{
      nama: 'Example Category',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Categories', null, {});

  }
};