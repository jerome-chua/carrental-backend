module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {

    });

    await queryInterface.createTable('bookings', {

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cars');
    await queryInterface.dropTable('bookings');
  },
};
