import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import valid from "card-validator";

const expirationDateRegExp = /^(0[1-9]|1[0-2])\/?([2-9]){1}?([0-9]{1})$/;

const validationSchema = Yup.object().shape({
  holder_name: Yup.string()
    .required("O nome do titular é obrigatório")
    .max(25, "O nome do titular não pode ter mais de 25 caracteres"),
  card_number: Yup.string()
    .test("test-number", "Número de cartão inválido", (value) => {
      const { isValid } = valid.number(value);
      return isValid;
    })
    .required("O número do cartão é obrigatório"),
  expiration_date: Yup.string()
    .required("A data de expiração é obrigatória")
    .min(5, "A data de expiração não pode ter menos de 5 caracteres")
    .max(5)
    .matches(expirationDateRegExp, "Data de expiração inválida"),
  security_code: Yup.string()
    .required("O código de segurança é obrigatório")
    .when("card_number", {
      is: (cardNumber: string) => {
        const secondPartLength = cardNumber.split("-")[1]?.length;
        return secondPartLength === 4 || cardNumber.length < 8;
      },
      then: Yup.string()
        .min(3, "O cvv deve ter 3 dígitos")
        .max(3, "O cvv deve ter 3 dígitos"),
    })
    .when("card_number", {
      is: (cardNumber: string) => {
        const secondPartLength = cardNumber.split("-")[1]?.length;
        return secondPartLength !== 4 && cardNumber.length > 8;
      },
      then: Yup.string()
        .min(4, "O cvv deve ter 4 dígitos")
        .max(4, "O cvv deve ter 4 dígitos"),
    }),
  brand: Yup.string(),
});

export const creditCardResolver = yupResolver(validationSchema);
