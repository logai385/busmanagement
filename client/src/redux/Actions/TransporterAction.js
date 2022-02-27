import { call, put, takeLatest } from "redux-saga/effects";
import TransporterService from "../../services/TransporterServices";
import { STATUS_CODE } from "../../util/Constants/SystemSettings";

import {
  ADD_TRANSPORTER_API,
  DELETE_TRANSPORTER_API,
  GET_TRANSPORTER_LIST_API,
  SET_TRANSPORTER_LIST,
  UPDATE_TRANSPORTER_API,
} from "../Constants/TransporterConst";

function* getTransporterListApi() {
  try {
    let response = yield call(TransporterService.getTransporterList);
    
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: SET_TRANSPORTER_LIST,
        transporterList: response.data.transporters,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* addTransporteApi(action) {
  try {
    const { transporter } = action;
    let response = yield call(TransporterService.addTransporter, transporter);
    // if (response.status === STATUS_CODE.SUCCESS) {
    //     yield put({
    //         type: GET_TRANSPORTER_LIST_API,
    //     });
    // }
    
  } catch (error) {
    console.log(error.message);
  }
}
function* deleteTransporterApi(action) {
  try {
    const { plate } = action;
    let response = yield call(TransporterService.deleteTransporter, plate);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TRANSPORTER_LIST_API,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* uppdateTransporterApi(action) {
  try {
    const { transporter } = action;
    let response = yield call(TransporterService.uppdateTransporter, transporter);
   
  } catch (error) {
    console.log(error.message);
    
  }
}

function* TransporterAction() {
  yield takeLatest(GET_TRANSPORTER_LIST_API, getTransporterListApi);
  yield takeLatest(DELETE_TRANSPORTER_API, deleteTransporterApi);
  yield takeLatest(ADD_TRANSPORTER_API, addTransporteApi);
  yield takeLatest(UPDATE_TRANSPORTER_API, uppdateTransporterApi);
}
export default TransporterAction;
