import { isBrowser } from "../isBrowser";

test("should return true", () => {
  expect(isBrowser).toBe(true);
});
