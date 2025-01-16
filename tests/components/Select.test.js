import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../../src/components/Select";

describe("Select Component", () => {
  test("renders the select dropdown with options", () => {
    const fileList = ["file1.csv", "file2.csv"];
    render(<Select fileName='' setFileName={() => {}} fileList={fileList} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText(/file1.csv/i)).toBeInTheDocument();
    expect(screen.getByText(/file2.csv/i)).toBeInTheDocument();
  });

  test("calls setFileName when an option is selected", () => {
    const setFileName = jest.fn();
    const fileList = ["file1.csv", "file2.csv"];
    render(
      <Select fileName='' setFileName={setFileName} fileList={fileList} />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "file1.csv" } });

    expect(setFileName).toHaveBeenCalledWith("file1.csv");
  });
});
