import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import carModel from './car.mjs';
import bookingModel from './booking.mjs';

const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Car = carModel(sequelize, Sequelize.DataTypes);
db.Booking = bookingModel(sequelize, Sequelize.DataTypes);

// Establish M-1 relationship between Car & Booking.
db.Car.hasMany(db.Booking);
db.Booking.belongsTo(db.Car);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
