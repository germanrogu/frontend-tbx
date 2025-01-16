import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Button Component", () => {
  test("renders the button with the correct text", () => {
    render(<Button handleFilter={() => {}} />);
    expect(screen.getByRole("button", { name: /Filter/i })).toBeInTheDocument();
  });

  test("calls the handleFilter function when clicked", () => {
    const handleFilter = jest.fn();
    render(<Button handleFilter={handleFilter} />);

    const button = screen.getByRole("button", { name: /Filter/i });
    fireEvent.click(button);

    expect(handleFilter).toHaveBeenCalledTimes(1);
  });
});
