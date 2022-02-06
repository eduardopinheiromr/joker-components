import { CardNumberVerification } from "card-validator/dist/card-number";
import { getCardNumberMask } from "./getCardNumberMask";

export const getCardMask = (validation: CardNumberVerification) => {
  return {
    number: getCardNumberMask(validation),
    cvv: "9".repeat(validation.card?.code.size || 3),
  };
};
