'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bookings', [
      {
        startDate:'2022-01-01',
        endDate:'2022-01-10',
        spotId:1,
        userId:1
      },
      {
        startDate:'2022-02-01',
        endDate:'2022-02-10',
        spotId:2,
        userId:2
      },
      {
        startDate:'2022-09-01',
        endDate:'2022-09-10',
        spotId:3,
        userId:3
      },
      {
        startDate:'2022-10-01',
        endDate:'2022-10-10',
        spotId:4,
        userId:4
      },
      {
        startDate:'2022-11-01',
        endDate:'2022-011-10',
        spotId:5,
        userId:4
      },
      {
        startDate:'2022-12-01',
        endDate:'2022-12-10',
        spotId:5,
        userId:3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
