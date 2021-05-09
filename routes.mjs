import db from './models/index.mjs';

import initCarsController from './controllers/cars.mjs';
import initBookingsController from './controllers/bookings.mjs';

export default function bindRoutes(app) {
  const carsController = initCarsController(db);
  const bookingsController = initBookingsController(db);

  app.get('/getcars', carsController.getCars);
  app.get('/getbookings', bookingsController.getBookings);
}
