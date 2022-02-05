import { Heading, useToast } from "@chakra-ui/react";
import Button from "@components/Button";
import CustomCheckbox from "@components/CustomCheckbox";
import CustomInput from "@components/CustomInput";
import { FormProvider, useForm } from "react-hook-form";
import { createUserResolver } from "./resolvers/createUserResolver";

export default function CreateUserForm() {
  const toast = useToast();

  const methods = useForm({ resolver: createUserResolver, mode: "onChange" });

  const onSubmit = async (data: any) => {
    console.log(data);
    toast({
      status: "success",
      title: "Usuário criado com sucesso",
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
    <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
      <Heading textAlign="center" mb={8}>
        Crie sua conta
      </Heading>
      <FormProvider {...methods}>
        <CustomInput name="name" placeholder="Nome completo" />
        <CustomInput name="email" placeholder="Seu e-mail" />
        <CustomInput
          name="birthdate"
          mask="99/99/9999"
          placeholder="Data de nascimento"
        />
        <CustomInput
          name="phone"
          mask="(99) 99999-9999"
          placeholder="Seu celular"
        />
        <CustomInput type="password" name="password" placeholder="Sua senha" />
        <CustomInput
          type="password"
          name="confirm_password"
          placeholder="Confirme sua senha"
        />
        <CustomCheckbox
          mt={[10, 8]}
          name="allow_newsletter"
          label="Aceito receber comunicação por email"
        />
        <Button type="submit" withIcon>
          Criar conta
        </Button>
      </FormProvider>
    </form>
  );
}
