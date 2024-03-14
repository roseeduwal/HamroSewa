import { useQuery } from "react-query";
import { fetchCategory } from "../api/category.api";

export const useFetchCategoryQuery = () => {
  return useQuery("categories", fetchCategory, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
