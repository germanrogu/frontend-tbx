import {
  fetchFileDataRequest,
  fetchFileDataSuccess,
  fetchFileDataFailure,
} from "../../../src/store/actions/filesActions";

describe("Files Actions", () => {
  test("fetchFileDataRequest creates the correct action", () => {
    const action = fetchFileDataRequest("file1.csv");
    expect(action).toEqual({
      type: "FETCH_FILE_DATA_REQUEST",
      payload: "file1.csv",
    });
  });

  test("fetchFileDataSuccess creates the correct action", () => {
    const mockData = [{ id: 1, name: "File 1" }];
    const action = fetchFileDataSuccess(mockData);
    expect(action).toEqual({
      type: "FETCH_FILE_DATA_SUCCESS",
      payload: mockData,
    });
  });

  test("fetchFileDataFailure creates the correct action", () => {
    const error = "Failed to fetch data";
    const action = fetchFileDataFailure(error);
    expect(action).toEqual({
      type: "FETCH_FILE_DATA_FAILURE",
      payload: error,
    });
  });
});
