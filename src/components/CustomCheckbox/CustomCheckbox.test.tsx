import React from "react";
import user from "@testing-library/user-event";
import { render, renderHook, screen } from "@testing-library/react";
import CustomCheckbox from "./index";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";
import { FormProvider, useForm } from "react-hook-form";

describe("CustomCheckbox", () => {
  it("should be checked when user click in checkbox", () => {
    const methods = useForm({ mode: "onChange" });

    render(
      <FormProvider {...methods}>
        <CustomCheckbox label="test" name="test" />
      </FormProvider>
    );

    const input = screen.getByLabelText(/test/i);

    expect(input).toHaveAttribute("type", "checkbox");

    user.click(input);

    expect(input).toBeChecked();
  });

  it("should be accessible", async () => {
    const { methods } = renderHook(useForm({ mode: "onChange" }));
    const { container } = render(
      <FormProvider {...methods}>
        <CustomCheckbox label="test" name="test" />
      </FormProvider>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
