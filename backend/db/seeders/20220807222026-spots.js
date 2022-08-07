'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Spots', [
      {
      ownerId: 1,
      address: "111 road",
      city: "Los Angles",
      state: "California",
      country: "United States",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "House-1",
      description: "spot-1",
      price: 111
      },
      {
        ownerId: 2,
        address: "222 road",
        city: "Los Angles",
        state: "California",
        country: "United States",
        lat: 38.7645358,
        lng: -121.4730327,
        name: "House-2",
        description: "spot-2",
        price: 222
      },
      {
        ownerId: 3,
        address: "333 road",
        city: "Los Angles",
        state: "California",
        country: "United States",
        lat: 39.7645358,
        lng: -120.4730327,
        name: "House-3",
        description: "spot-3",
        price: 333
      },
      {
        ownerId: 4,
        address: "444 road",
        city: "Los Angles",
        state: "California",
        country: "United States",
        lat: 40.7645358,
        lng: -119.4730327,
        name: "House-4",
        description: "spot-4",
        price: 444
      },
      {
        ownerId: 5,
        address: "555 road",
        city: "Los Angles",
        state: "California",
        country: "United States",
        lat: 41.7645358,
        lng: -118.4730327,
        name: "House-5",
        description: "spot-5",
        price: 555
      }
    ], {});
      
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Spots', null, {});
  }
};
