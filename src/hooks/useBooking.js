import { useMutation, useQuery } from "react-query";
import { createBooking, fetchBookings } from "../api/booking.api";

export const useBookingMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: createBooking, onError, onSuccess });
};

export const useFetchBookingQuery = (userType) => {
  return useQuery("bookings", () => fetchBookings(userType), {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
