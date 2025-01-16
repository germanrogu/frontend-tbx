import {
  FETCH_FILE_DATA_REQUEST,
  FETCH_FILE_DATA_SUCCESS,
  FETCH_FILE_DATA_FAILURE,
  FETCH_FILE_LIST_SUCCESS,
} from "../types/index";

const initialState = {
  fileList: [],
  fileData: [],
  loading: false,
  error: null,
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILE_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_FILE_DATA_SUCCESS:
      return { ...state, loading: false, fileData: action.payload };
    case FETCH_FILE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_FILE_LIST_SUCCESS:
      return { ...state, fileList: action.payload };

    default:
      return state;
  }
};

export default filesReducer;
