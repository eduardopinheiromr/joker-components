/* eslint-disable no-unused-vars */
type TCredentials = {
  email: string;
  password: string;
};

type TSession = {
  token: string;
  name: string;
  Id: string;
  ParentContractId: string;
  Profile: string;
  aud: string;
  email: string;
  exp: number;
  iat: number;
  expiration: number;
  iss: string;
  jti: string;
  nbf: number;
  role: string;
  sub: string;
};
