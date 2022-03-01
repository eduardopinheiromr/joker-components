/* eslint-disable no-unused-vars */
import { getLocalValue, setLocalValue } from "@utils/localStorageManager";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { now } from "@utils/now";
import jwt_decode from "jwt-decode";

// Service to auth user
import { authenticate } from "@services/auth";

type TUseSession = {
  session?: TSession;
  signOut: () => Promise<void>;
  signIn: (credentials: TCredentials) => Promise<void | { error: string }>;
  isLoading: boolean;
};

export default function useSession(): TUseSession {
  const router = useRouter();
  const [session, setSession] = useState<TSession>();
  const [isLoading, setIsLoading] = useState(true);

  const localToken = getLocalValue("token");

  useEffect(() => {
    if (localToken) {
      const { token, expiration, organizationName } = localToken;
      if (!session) {
        if (now() > expiration) {
          signOut();
        }
        if (now() < expiration && token) {
          const decodedToken = jwt_decode(token) as TSession;
          setSession({
            ...decodedToken,
            expiration,
            name: organizationName,
          });
        }

        setIsLoading(false);
      }
    }
  }, [session, localToken]);

  useEffect(() => {
    if (!isLoading && session) {
      if (now() > session.expiration) {
        signOut();
      }
      setIsLoading(false);
    }
  }, [session, isLoading]);

  const signOut = async () => {
    setSession(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("allInsured");
    await router.push("/");
  };

  const signIn = async ({ email, password }: TCredentials) => {
    try {
      const { token, organizationName } = await authenticate({
        email,
        password,
      });
      const { exp, iat } = jwt_decode(token) as TSession;

      const TOKEN_EXPIRATION_IN_MS = (exp - iat) * 1000;

      const expiration = now() + TOKEN_EXPIRATION_IN_MS;

      setLocalValue("token", { token, expiration, organizationName });
    } catch {
      return { error: "Houve um problema no login" };
    }
  };

  const tools = {
    signIn,
    signOut,
    isLoading,
  };

  return session ? { session, ...tools } : tools;
}
