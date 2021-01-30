import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const greetings = screen.queryByText("Hello World");
  expect(greetings).toBeInTheDocument();
});
