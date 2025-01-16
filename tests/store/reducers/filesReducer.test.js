import filesReducer from "../../../src/store/reducers/filesReducer";

describe("Files Reducer", () => {
  const initialState = {
    fileData: [],
    loading: false,
    error: null,
    fileList: [],
  };

  test("returns the initial state", () => {
    const state = filesReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  test("handles FETCH_FILE_DATA_REQUEST", () => {
    const action = { type: "FETCH_FILE_DATA_REQUEST" };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("handles FETCH_FILE_DATA_SUCCESS", () => {
    const mockData = [{ id: 1, name: "File 1" }];
    const action = { type: "FETCH_FILE_DATA_SUCCESS", payload: mockData };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fileData: mockData,
      loading: false,
    });
  });

  test("handles FETCH_FILE_DATA_FAILURE", () => {
    const error = "Failed to fetch data";
    const action = { type: "FETCH_FILE_DATA_FAILURE", payload: error };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      error,
      loading: false,
    });
  });
});
