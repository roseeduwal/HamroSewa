import api from "./api";

export function login(loginCredential) {
  return api.post("auth/login", loginCredential);
}

export function register(userCredential) {
  return api.post("auth/sign-up", userCredential);
}

export function logout() {
  return api.post("auth/sign-out");
}

export function verifyEmail(token) {
  return api.post(
    `auth/verify-email`,
    { token },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function changePassword(passwordInfo) {
  return api.patch("auth/change-password", passwordInfo);
}
