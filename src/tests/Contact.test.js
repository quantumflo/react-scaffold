import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe(" testing contact component ", () => {
  test("Contact component render", () => {
    render(<Contact />);
    const contactElement = screen.getByRole("heading");
    expect(contactElement).toBeInTheDocument();
  });
});
