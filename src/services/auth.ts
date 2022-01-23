import api from "./api";

export const signIn = async ({ username, password }: TCredentials) => {
  const { data } = await api.post("/auth", { username, password });

  return data;
};
