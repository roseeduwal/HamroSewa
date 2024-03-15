import { useMutation } from "react-query";
import { login, logout, register, verifyEmail } from "../api/auth.api";

export const useLoginMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: login, onError, onSuccess });
};

export const useSignUpMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: register, onError, onSuccess });
};

export const useSignOutMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: logout, onError, onSuccess });
};

export const useVerifyEmailMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: verifyEmail, onError, onSuccess });
};
