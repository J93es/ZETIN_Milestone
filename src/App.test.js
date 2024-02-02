import { render, screen } from "@testing-library/react";
import Milestone from "./Milestone";

test("renders learn react link", () => {
  render(<Milestone />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
