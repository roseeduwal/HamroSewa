import api from "./api";

export const fetchCategory = () => {
  return api.get("categories");
};
