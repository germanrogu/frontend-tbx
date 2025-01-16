import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../../src/pages/Home";

const mockStore = configureStore([]);

describe("Home Integration", () => {
  let store;

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

  beforeEach(() => {
    store = mockStore({
      files: {
        fileData: mockData,
        loading: false,
        error: null,
        fileList: ["file1.csv", "file2.csv"],
      },
    });
    store.dispatch = jest.fn();
  });

  test("renders data from Redux store", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const table = screen.getByRole("table");

    const rows = within(table).getAllByRole("row");

    expect(within(rows[1]).getByText(/file1.csv/i)).toBeInTheDocument();
    expect(within(rows[1]).getByText(/Line 1/i)).toBeInTheDocument();
    expect(within(rows[1]).getByText(/123/i)).toBeInTheDocument();
    expect(within(rows[1]).getByText(/0x1a/i)).toBeInTheDocument();

    expect(within(rows[2]).getByText(/file1.csv/i)).toBeInTheDocument();
    expect(within(rows[2]).getByText(/Line 2/i)).toBeInTheDocument();
    expect(within(rows[2]).getByText(/456/i)).toBeInTheDocument();
    expect(within(rows[2]).getByText(/0x2b/i)).toBeInTheDocument();

    expect(within(rows[3]).getByText(/file2.csv/i)).toBeInTheDocument();
    expect(within(rows[3]).getByText(/Line A/i)).toBeInTheDocument();
    expect(within(rows[3]).getByText(/789/i)).toBeInTheDocument();
    expect(within(rows[3]).getByText(/0x3c/i)).toBeInTheDocument();

    expect(within(rows[4]).getByText(/file2.csv/i)).toBeInTheDocument();
    expect(within(rows[4]).getByText(/Line B/i)).toBeInTheDocument();
    expect(within(rows[4]).getByText(/101/i)).toBeInTheDocument();
    expect(within(rows[4]).getByText(/0x4d/i)).toBeInTheDocument();
  });

  test("dispatches fetchFileDataRequest when filter button is clicked", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /Filter/i });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "FETCH_FILE_DATA_REQUEST",
      payload: "",
    });
  });
});
