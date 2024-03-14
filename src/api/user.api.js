import api from "./api";

export const fetchMe = () => {
  return api.get("users/me");
};
