import { useQuery } from "react-query";
import { fetchCategory, fetchCategoryDetail } from "../api/category.api";

export const useFetchCategoryQuery = () => {
  return useQuery("categories", fetchCategory, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useFetchCategoryDetailQuery = (id) => {
  console.log("id", id);
  return useQuery(["categories", id], () => fetchCategoryDetail(id), {
    refetchOnWindowFocus: false,

    retry: 1,
  });
};
