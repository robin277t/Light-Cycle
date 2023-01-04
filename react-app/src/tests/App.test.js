import { render, screen } from "@testing-library/react";
import App from "../components/app/App";

test("renders youtube link", () => {
  render(<App />);
  const linkElement = screen.getByText(/AWESOME/i);
  expect(linkElement).toBeInTheDocument();
});
