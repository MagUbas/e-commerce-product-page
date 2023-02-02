import { fireEvent, render, screen, within } from "@testing-library/react";
import ImgContainer from "./imgContainer";
describe("imgContainer", () => {
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

    const thumbnail = screen.getByAltText(
      `thumbnail product-${thumbnailNumber}`
    );
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
});

describe("modal", () => {
  test("clicking tumbnail changes main img", () => {
    render(<ImgContainer />);
    const openModalImg = screen.getByAltText(/main product/i);

    fireEvent.click(openModalImg);
    const modal = screen.getByTestId("modalImg");
    const thumbnailNumber = 2;

    const thumbnail = within(modal).getByAltText(
      `thumbnail product-${thumbnailNumber}`
    );
    const mainImg = within(modal).getByAltText(/main product/i);

    fireEvent.click(thumbnail);
    expect(mainImg).toHaveAttribute("alt", `main product-${thumbnailNumber}`);
  });

  test("clicking next arrow changes main img to next thumbnail", () => {
    render(<ImgContainer />);
    const openModalImg = screen.getByAltText(/main product/i);
    fireEvent.click(openModalImg);
    const modal = screen.getByTestId("modalImg");

    const imgNumber = 2;
    const thumbnail = within(modal).getByAltText(
      `thumbnail product-${imgNumber}`
    );
    fireEvent.click(thumbnail);
    const mainImg = within(modal).getByAltText(/main product/i);
    const next = within(modal).getByAltText("next");
    fireEvent.click(next);

    expect(mainImg).toHaveAttribute("alt", `main product-${imgNumber + 1}`);
  });

  test("clicking prev arrow changes main img to prev thumbnail", () => {
    render(<ImgContainer />);
    const openModalImg = screen.getByAltText(/main product/i);
    fireEvent.click(openModalImg);
    const modal = screen.getByTestId("modalImg");

    const imgNumber = 2;
    const thumbnail = within(modal).getByAltText(
      `thumbnail product-${imgNumber}`
    );
    fireEvent.click(thumbnail);
    const mainImg = within(modal).getByAltText(/main product/i);
    const prev = within(modal).getByAltText("prev");
    fireEvent.click(prev);

    expect(mainImg).toHaveAttribute("alt", `main product-${imgNumber - 1}`);
  });

  test("clicking close button close modal", () => {
    render(<ImgContainer />);
    const openModalImg = screen.getByAltText(/main product/i);
    fireEvent.click(openModalImg);
    const modal = screen.getByTestId("modalImg");

    const close = within(modal).getByAltText("close");
    fireEvent.click(close);
    expect(modal).not.toBeInTheDocument();
  });

  test("clicking outside of modal close modal", () => {
    render(<ImgContainer />);
    const openModalImg = screen.getByAltText(/main product/i);
    fireEvent.click(openModalImg);
    const modal = screen.getByTestId("modalImg");

    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });
});
