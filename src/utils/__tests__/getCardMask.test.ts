import valid from "card-validator";
import { getCardMask } from "../getCardMask";

describe("Get Card Masks", () => {
  const MOCKED_MASTERCARD_NUMBER = "4111111111111111";
  const MOCKED_AMERICAN_EXPRESS_NUMBER = "378282246310005";

  it("should return the mask of mastercard cvv", () => {
    const validation = valid.number(MOCKED_MASTERCARD_NUMBER);
    const cvvMask = getCardMask(validation).cvv;
    const CORRECT_MASTERCARD_CVV_MASK = "999";

    expect(cvvMask).toBe(CORRECT_MASTERCARD_CVV_MASK);
  });

  it("should return the mask of mastercard number", () => {
    const validation = valid.number(MOCKED_MASTERCARD_NUMBER);
    const numberMask = getCardMask(validation).number;
    const CORRECT_MASTERCARD_NUMBER_MASK = "9999-9999-9999-9999";

    expect(numberMask).toBe(CORRECT_MASTERCARD_NUMBER_MASK);
  });

  it("should return the mask of american express cvv", () => {
    const validation = valid.number(MOCKED_AMERICAN_EXPRESS_NUMBER);
    const cvvMask = getCardMask(validation).cvv;
    const CORRECT_AMERICAN_EXPRESS_CVV_MASK = "9999";

    expect(cvvMask).toBe(CORRECT_AMERICAN_EXPRESS_CVV_MASK);
  });

  it("should return the mask of american express number", () => {
    const validation = valid.number(MOCKED_AMERICAN_EXPRESS_NUMBER);
    const numberMask = getCardMask(validation).number;
    const CORRECT_AMERICAN_EXPRESS_NUMBER_MASK = "9999-999999-99999";

    expect(numberMask).toBe(CORRECT_AMERICAN_EXPRESS_NUMBER_MASK);
  });
});
