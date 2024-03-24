import api from "./api";

export const confirmPayment = (pidx) => {
  return api.post("payments/validate", { pidx });
};
