/**
 * @jest-environment node
 */

import { isBrowser } from "../isBrowser";

test("should return false", () => {
  expect(isBrowser).toBe(false);
});
