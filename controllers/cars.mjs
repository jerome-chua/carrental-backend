export default function initCarsController(db) {
  const getCars = async (req, res) => {
    try {
      const cars = await db.Car.findAll();

      console.log('Cars: ------ 🚗\n', cars);

      res.send(cars);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getCars,
  };
}
