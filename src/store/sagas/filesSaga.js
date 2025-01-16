import { call, put, takeLatest } from "redux-saga/effects";
import { getFileData, getFileList } from "../../services/api";
import {
  fetchFileDataSuccess,
  fetchFileDataFailure,
  fetchFileListSuccess,
} from "../actions/filesActions";
import { FETCH_FILE_DATA_REQUEST } from "../types/index";

function* fetchFileDataSaga(action) {
  try {
    const fileName = action.payload;
    if (!fileName) {
      const fileList = yield call(getFileList);
      yield put(fetchFileListSuccess(fileList));
    }

    const data = yield call(getFileData, fileName);
    yield put(fetchFileDataSuccess(data));
  } catch (error) {
    yield put(
      fetchFileDataFailure(error?.response?.data?.error || error.message)
    );
  }
}

export default function* filesSaga() {
  yield takeLatest(FETCH_FILE_DATA_REQUEST, fetchFileDataSaga);
}
