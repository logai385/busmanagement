import { all } from "redux-saga/effects";

import TransporterAction from "../Actions/TransporterAction";
import LineAction from "../Actions/LineAction";
import DocumentSaga from "./DocumnentSaga";
import AuthAction from "../Actions/AuthAction";
export function* rootSaga() {
  yield all([TransporterAction(), LineAction(), DocumentSaga(),AuthAction()]);
}
