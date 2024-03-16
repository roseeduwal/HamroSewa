import api from "./api";

export const createBooking = (booking) => {
  return api.post("bookings", booking);
};
