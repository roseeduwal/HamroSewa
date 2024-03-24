import api from "./api";

export const createBooking = (booking) => {
  return api.post("bookings", booking);
};

export const fetchBookings = (userType = "") => {
  return api.get(`bookings/?userType=${userType}`);
};

export const updateBooking = (booking) => {
  console.log(booking);
  return api.patch(`bookings/${booking.id}`, booking);
};
