import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "../../src/components/DataTable";

describe("DataTable Component", () => {
  const mockData = [
    {
      file: "file1.csv",
      lines: [
        { text: "Line 1", number: 123, hex: "0x1a" },
        { text: "Line 2", number: 456, hex: "0x2b" },
      ],
    },
    {
      file: "file2.csv",
      lines: [
        { text: "Line A", number: 789, hex: "0x3c" },
        { text: "Line B", number: 101, hex: "0x4d" },
      ],
    },
  ];

  test("renders a message when there is no data", () => {
    render(<DataTable data={[]} />);

    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  test("renders the table with data", () => {
    render(<DataTable data={mockData} />);

    expect(screen.getByText(/File Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Hex/i)).toBeInTheDocument();

    const file1Occurrences = screen.getAllByText(/file1.csv/i);
    expect(file1Occurrences).toHaveLength(2);

    const file2Occurrences = screen.getAllByText(/file2.csv/i);
    expect(file2Occurrences).toHaveLength(2);

    expect(screen.getByText(/Line 1/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
    expect(screen.getByText(/0x1a/i)).toBeInTheDocument();

    expect(screen.getByText(/Line A/i)).toBeInTheDocument();
    expect(screen.getByText(/789/i)).toBeInTheDocument();
    expect(screen.getByText(/0x3c/i)).toBeInTheDocument();
  });

  test("renders multiple rows for each file's lines", () => {
    render(<DataTable data={mockData} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5);
  });
});
