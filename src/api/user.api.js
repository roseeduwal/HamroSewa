import api from "./api";

export const fetchMe = () => {
  return api.get("users/me");
};

export const fetchUsers = (userType = "") => {
  return api.get(`users/?userType=${userType}`);
};

export const fetchProfessional = () => {
  return api.get("users/professionals");
};

export const updateUser = (userDetail) => {
  return api.patch(`users/${userDetail.id}`, userDetail);
};

export const uploadImage = (userDetail) => {
  console.log(userDetail);
  return api.patch(
    `users/upload/${userDetail.id}`,
    userDetail.profileImageUrl,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};
