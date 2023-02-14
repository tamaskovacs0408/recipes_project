import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders Recipe finder heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/recipe finder/i);
    expect(headingElement).toBeInTheDocument();
  });
});
