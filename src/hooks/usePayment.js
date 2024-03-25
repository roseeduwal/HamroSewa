import { useMutation, useQuery } from "react-query";
import { confirmPayment, fetchPayment } from "../api/payment.api";

export const useConfirmPaymentMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: confirmPayment, onError, onSuccess });
};

export const useFetchPaymentQuery = () => {
  return useQuery("payments", fetchPayment, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
