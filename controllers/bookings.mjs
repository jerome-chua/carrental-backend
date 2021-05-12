export default function initBookingsController(db) {
  const confirmBooking = async (req, res) => {
    const { bookingData } = req.body;
    try {
      const booking = await db.Booking.create(bookingData, { returning: true });
      console.log('Show booking:', booking);
      res.send('Booking Success!');
    } catch (err) {
      console.log('Error: ----', err);
    }
  };

  return {
    confirmBooking,
  };
}
