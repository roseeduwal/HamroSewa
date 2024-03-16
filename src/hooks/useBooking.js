import { useMutation } from "react-query";
import { createBooking } from "../api/booking.api";

export const useBookingMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: createBooking, onError, onSuccess });
};
