import { useQuery } from "react-query";
import { fetchMe } from "../api/user.api";

export const useFetchMeQuery = (onSuccess, onError) => {
  return useQuery("user", fetchMe, {
    onSuccess,
    onError,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
