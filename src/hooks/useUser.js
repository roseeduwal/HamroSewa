import { useMutation, useQuery } from "react-query";
import {
  fetchMe,
  fetchProfessional,
  fetchUsers,
  updateUser,
  uploadImage,
} from "../api/user.api";

export const useFetchMeQuery = (onSuccess, onError) => {
  return useQuery("user", fetchMe, {
    onSuccess,
    onError,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useFetchUsersQuery = (userType) => {
  return useQuery("users", () => fetchUsers(userType), {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useFetchProfessionalQuery = () => {
  return useQuery("users", fetchProfessional, {
    refetchOnWindowFocus: false,
    retry: 0,
  });
};

export const useUpdateUserMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: updateUser, onError, onSuccess });
};

export const useUploadUserImageMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: uploadImage, onError, onSuccess });
};
