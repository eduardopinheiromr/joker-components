import { Flex, useToast } from "@chakra-ui/react";
import LoginForm from "@components/LoginForm";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export interface SignInResponse {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

export default function Login() {
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: TCredentials) => {
    const auth = (await signIn("credentials", {
      redirect: false,
      ...data,
    })) as unknown as SignInResponse;

    if (auth?.error) {
      // Handle auth failed
      console.log("auth failed", auth.error);
      toast({
        title: "Falha no login",
        description: "Verifique os dados digitados e tente novamente",
        status: "error",
        position: "bottom-end",
      });
    } else {
      if (router.query.intent) {
        router.push(router.query.intent as string);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <Flex justify="center" align="center" h="100vh" w="full" bg="blue.400">
      <LoginForm onSubmit={onSubmit} />
    </Flex>
  );
}
