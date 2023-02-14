import { render, screen } from "@testing-library/react";
import { RecipeFinder } from "./RecipeFinder";

describe("RecipeFinder component", () => {
  test("renders enter a food name", () => {
    render(<RecipeFinder />);
    const labelElement = screen.getByText(/enter a food name/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("renders input", () => {
    render(<RecipeFinder />);
    const inputElement = screen.getByTestId("search_input");
    expect(inputElement).toBeInTheDocument();
  })

  test("renders search button", () => {
    render(<RecipeFinder />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  })
});
