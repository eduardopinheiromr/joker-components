import { Box, Heading, useToast } from "@chakra-ui/react";
import Button from "@components/Button";
import CustomInput from "@components/CustomInput";
import { FormProvider, useForm } from "react-hook-form";
import { loginResolver } from "./resolvers/loginResolver";

export default function LoginForm() {
  const toast = useToast();

  const methods = useForm({ resolver: loginResolver, mode: "onChange" });

  const onSubmit = async (data: any) => {
    console.log(data);
    toast({
      status: "success",
      title: "Bem vindo!",
      position: "bottom-right",
    });
    methods.reset();
  };

  const onError = () => {
    toast({
      status: "error",
      title: "Verifique os campos e tente novamente",
      position: "bottom-right",
    });
  };

  return (
    <Box
      as="form"
      w="full"
      maxW="420px"
      onSubmit={methods.handleSubmit(onSubmit, onError)}
    >
      <Heading textAlign="center" mb={8}>
        Faça login
      </Heading>
      <FormProvider {...methods}>
        <CustomInput name="email" placeholder="Seu e-mail" />
        <CustomInput type="password" name="password" placeholder="Sua senha" />
        <Button type="submit" withIcon>
          Entrar
        </Button>
      </FormProvider>
    </Box>
  );
}
