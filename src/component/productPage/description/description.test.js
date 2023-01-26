import { fireEvent, render, screen } from "@testing-library/react";
import Description from "./description";

test('clicking "-" substract 1 of amount of items', () => {
  render(<Description />);
  const buttonSubstract = screen.getByRole("button", { name: "-" });

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
  fireEvent.click(buttonSubstract);
  expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
});

test('clicking "+" add 1 to amount of items', () => {
  render(<Description />);
  const buttonAdd = screen.getByRole("button", { name: "+" });

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
  fireEvent.click(buttonAdd);
  expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
});

test('clicking "-" substract to max 0 amount of items', () => {
  render(<Description />);
  const buttonSubstract = screen.getByRole("button", { name: "-" });

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
  fireEvent.click(buttonSubstract);
  fireEvent.click(buttonSubstract);
  fireEvent.click(buttonSubstract);
  expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
});
