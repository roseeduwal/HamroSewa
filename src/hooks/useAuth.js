import { useMutation } from "react-query";
import { login, register } from "../api/auth.api";

export const useLoginMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: login, onError, onSuccess });
};

export const useSignUpMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: register, onError, onSuccess });
};
