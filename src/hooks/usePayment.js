import { useMutation } from "react-query";
import { confirmPayment } from "../api/payment.api";

export const useConfirmPaymentMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: confirmPayment, onError, onSuccess });
};
