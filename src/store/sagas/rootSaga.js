import { all } from "redux-saga/effects";
import filesSaga from "./filesSaga";

export default function* rootSaga() {
  yield all([filesSaga()]);
}
