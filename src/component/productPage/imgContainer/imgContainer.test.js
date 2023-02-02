import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ImgContainer from "./imgContainer";

test("on load first thumbnail is the main image", () => {
  render(<ImgContainer />);

  const thumbnail = screen.getByAltText(/thumbnail product-1/i);
  const mainImg = screen.getByAltText(/main product-1/i);
  expect(mainImg).toBeInTheDocument();
  expect(mainImg).toHaveAttribute("alt", "main product-1");
  expect(thumbnail).toBeInTheDocument();
});

test("clicking tumbnail changes main img", () => {
  render(<ImgContainer />);
  const thumbnailNumber = 2;

  const thumbnail = screen.getByAltText(`thumbnail product-${thumbnailNumber}`);
  const mainImg = screen.getByAltText(/main product/i);

  fireEvent.click(thumbnail);
  expect(mainImg).toHaveAttribute("alt", `main product-${thumbnailNumber}`);
});

test("clicking on main image opens modal", () => {
  render(<ImgContainer />);
  const mainImg = screen.getByAltText(/main product/i);

  fireEvent.click(mainImg);
  const modal = screen.getByTestId("modalImg");
  expect(modal).toBeInTheDocument();
});
