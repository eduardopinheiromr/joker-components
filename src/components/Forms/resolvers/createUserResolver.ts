import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { dateRegExp, phoneRegExp } from "@regexps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres"),
  birthdate: Yup.string()
    .matches(dateRegExp, "Confira se esta data é válida")
    .test("correctAgeDigits", "O ano deve conter 4 dígitos", (value) => {
      const year = value?.split("/")[2];
      return year?.length === 4;
    })
    .required("A data de nascimento é obrigatória"),
  email: Yup.string()
    .email("Por favor, confira se este email é válido")
    .required("O email é obrigatório"),
  phone: Yup.string()
    .matches(phoneRegExp, "Por favor, confira se este telefone é válido")
    .required("O telefone é obrigatório")
    .min(11, "O telefone deve ter no mínimo 11 caracteres"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(16, "A senha deve ter no máximo 16 caracteres")
    .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter pelo menos uma letra minúscula")
    .matches(/[0-9]/, "Deve conter pelo menos um número")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  confirm_password: Yup.string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
  allow_newsletter: Yup.boolean(),
});

export const createUserResolver = yupResolver(validationSchema);
