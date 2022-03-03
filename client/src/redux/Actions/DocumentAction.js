import { put, takeLatest, call } from "redux-saga/effects";
import DocumentServices from "../../services/DocumentServices";
import { STATUS_CODE } from "../../util/Constants/SystemSettings";
import {
  ADD_DOCUMENT_API,
  GET_DOCUMENT_LIST_API,
  SET_DOCUMENT_LIST,
} from "../Constants/DocumentConst";

function* getDocumentListApi() {
  try {
    let response = yield call(DocumentServices.getDocumentList);
    console.log("response", response.data.data);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put({ type: SET_DOCUMENT_LIST, documentList: response.data.data });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* addDocumentApi(action){
  try {
    let response = yield call(DocumentServices.addDocument,action.data);  
  } catch (error) {
    console.log(error.message);
  }
    
  
}


function* DocumentAction() {
  yield takeLatest(GET_DOCUMENT_LIST_API, getDocumentListApi);
  yield takeLatest(ADD_DOCUMENT_API, addDocumentApi);
}
export default DocumentAction;
