import { all } from "redux-saga/effects";

import TransporterAction from "../Actions/TransporterAction";
import LineAction from "../Actions/LineAction";
import DocumentAction from "../Actions/DocumentAction";
export function* rootSaga() {
  yield all([TransporterAction(), LineAction(), DocumentAction()]);
}
