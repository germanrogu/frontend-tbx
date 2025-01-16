import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../../src/components/Loader";

describe("Loader Component", () => {
  test("renders the loader with the correct text", () => {
    render(<Loader />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
