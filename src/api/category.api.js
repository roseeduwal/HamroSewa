import api from "./api";

export const fetchCategory = () => {
  return api.get("categories");
};

export const fetchCategoryDetail = (id) => {
  return api.get(`categories/${id}`);
};
