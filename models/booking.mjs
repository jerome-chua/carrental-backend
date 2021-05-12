export default function bookingModel(sequelize, DataTypes) {
  return sequelize.define('bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    car_id: {
      references: {
        model: 'cars',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    pickup: {
      type: DataTypes.TEXT,
    },
    dropoff: {
      type: DataTypes.TEXT,
    },
    pickupDate: {
      type: DataTypes.DATE,
    },
    returnDate: {
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, { underscored: true });
}
