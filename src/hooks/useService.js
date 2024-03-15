import { useMutation, useQuery } from "react-query";
import { addService, fetchServices } from "../api/service.api";

export const useFetchServiceQuery = () => {
  return useQuery("services", fetchServices, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useAddServiceMutation = (onSuccess, onError) => {
  return useMutation({ mutationFn: addService, onError, onSuccess });
};
