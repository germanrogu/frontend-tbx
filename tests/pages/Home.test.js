import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../../src/pages/Home";

const mockStore = configureStore([]);
const initialState = {
  files: {
    fileData: [],
    loading: false,
    error: null,
    fileList: ["file1.csv", "file2.csv"],
  },
};

describe("Home Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders the header and initial layout", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/React Test App/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Filter by File Name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Filter/i })).toBeInTheDocument();
  });

  test("renders the loader when loading", () => {
    store = mockStore({
      files: {
        ...initialState.files,
        loading: true,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("renders an error message when there is an error", () => {
    store = mockStore({
      files: {
        ...initialState.files,
        error: "Failed to fetch data",
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  test("dispatches fetchFileDataRequest when the filter button is clicked", () => {
    store.dispatch = jest.fn();

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
