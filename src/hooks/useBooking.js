import { useMutation, useQuery } from "react-query";
import {
  createBooking,
  deleteBooking,
  fetchBookings,
  updateBooking,
} from "../api/booking.api";

export const useBookingMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: createBooking, onError, onSuccess });
};

export const useUpdateBookingMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: updateBooking, onError, onSuccess });
};

export const useFetchBookingQuery = (userType) => {
  return useQuery("bookings", () => fetchBookings(userType), {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useDeleteBookingMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: deleteBooking, onError, onSuccess });
};
