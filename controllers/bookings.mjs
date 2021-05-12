export default function initBookingsController(db) {
  const confirmBooking = async (req, res) => {
    const { bookingData } = req.body;
    console.log('========== booking =========:', req.body);
    try {
      const booking = await db.Booking.create(bookingData, { returning: true });
      console.log(booking);

      res.send('Booking Success!');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    confirmBooking,
  };
}
