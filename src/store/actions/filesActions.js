import {
  FETCH_FILE_DATA_REQUEST,
  FETCH_FILE_DATA_SUCCESS,
  FETCH_FILE_DATA_FAILURE,
  FETCH_FILE_LIST_SUCCESS,
} from "../types/index";

export const fetchFileDataRequest = (fileName = "") => ({
  type: FETCH_FILE_DATA_REQUEST,
  payload: fileName,
});
export const fetchFileDataSuccess = (data) => ({
  type: FETCH_FILE_DATA_SUCCESS,
  payload: data,
});
export const fetchFileDataFailure = (error) => ({
  type: FETCH_FILE_DATA_FAILURE,
  payload: error,
});
export const fetchFileListSuccess = (fileList) => ({
  type: FETCH_FILE_LIST_SUCCESS,
  payload: fileList,
});
