import React from "react";
import { render, screen } from "@testing-library/react";
import { AdlButton } from "../src/components/buttons/AdlButton";

describe("AdlButton component", () => {
  it("We should have button with correct label and type and default buttonTypeClasses classes", () => {
    render(<AdlButton title="test" type="button">test button</AdlButton>);
    const buttonElement = screen.getByText("test button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toHaveClass("btn btn-block ")
  });

  it("We should render button with required props and classes", () => {
    render(<AdlButton title="test" type="button" classes="btn-secondary">test button</AdlButton>);
    const buttonElement = screen.getByText("test button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toHaveClass("btn btn-block btn-secondary");
  });
});
