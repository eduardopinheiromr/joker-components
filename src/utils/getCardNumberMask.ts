import { CardNumberVerification } from "card-validator/dist/card-number";

export const getCardNumberMask = (validation?: CardNumberVerification) => {
  if (validation?.card) {
    const initialMask = "9".repeat(validation?.card?.lengths[0]);
    const mask = initialMask
      .split("")
      .map((number, index) => {
        if (validation.card?.gaps.includes(index)) {
          return "-" + number;
        }
        return number;
      })
      .join("");
    return mask;
  }
  return "9999-9999-9999-9999";
};
