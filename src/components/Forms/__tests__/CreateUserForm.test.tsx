import React from "react";
import { render } from "@testing-library/react";
import CreateUserForm from "../CreateUserForm";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";

describe("Create User Form", () => {
  it("should be accessible", async () => {
    const { container } = render(<CreateUserForm />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
