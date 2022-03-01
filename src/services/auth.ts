import api from "./api";

export const authenticate = async ({ email, password }: TCredentials) => {
  const { data } = await api.post("/auth", { email, password });

  return data;
};
