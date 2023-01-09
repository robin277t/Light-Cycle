import { render, screen } from "@testing-library/react";
import GridMaker from "../components/grid/GridMaker";
import Cell from "../components/grid/Cell";

test("header2", () => {
  render(<GridMaker />);
  const linkElement = screen.getByText(/Grid/i);
  expect(linkElement).toBeInTheDocument();
});
