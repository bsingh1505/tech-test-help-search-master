import TestRenderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import { PaginationView } from "../pagination";

describe("Card component", () => {
  test("match snapshot : if totalItems is null", () => {
    const tree = TestRenderer.create(<PaginationView />);
    expect(tree).toMatchSnapshot();
  });
  test("match snapshot : For valid data", () => {
    const setCurrentPage = jest.fn();
    const tree = TestRenderer.create(<PaginationView totalItems={5} currentPage={1} setCurrentPage={setCurrentPage} />);
    expect(tree).toMatchSnapshot();
  });
  test("Pagination button being clicked and correct function being called", () => {
    const setCurrentPage = jest.fn();
    render(<PaginationView totalItems={5} currentPage={1} setCurrentPage={setCurrentPage} />);
    const btn = screen.getByTestId("btn-1");
    fireEvent.click(btn);
    expect(setCurrentPage).toHaveBeenCalledTimes(1);
  });
});
