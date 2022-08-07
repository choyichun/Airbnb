'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Carol-1',
        lastName: 'Cho-1',
        email: 'carol1@user.io',
        username: 'demoUser-1',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        firstName: 'Carol-2',
        lastName: 'Cho-2',
        email: 'carol2@user.io',
        username: 'demoUser-2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Carol-3',
        lastName: 'Cho-3',
        email: 'carol3@user.io',
        username: 'demoUser-3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Carol-4',
        lastName: 'Cho-4',
        email: 'carol4@user.io',
        username: 'demoUser-4',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demoUser-1', 'demoUser-2', 'demoUser-3', 'demoUser-4']}
    }, {})
  }
};
