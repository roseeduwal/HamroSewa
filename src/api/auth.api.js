import api from "./api";

export function login(loginCredential) {
  return api.post("auth/login", loginCredential);
}

export function register(userCredential) {
  return api.post("auth/sign-up", userCredential);
}
