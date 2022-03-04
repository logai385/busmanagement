import { put, takeLatest, call } from "redux-saga/effects";
import DocumentServices from "../../services/DocumentServices";
import { STATUS_CODE } from "../../util/Constants/SystemSettings";
import {
  ADD_DOCUMENT_API,
  GET_DOCUMENT_LIST_API,  
} from "../Constants/DocumentConst";
import Notification from  "../../util/Notification";
import { setDocumentList } from "../Actions/DocumentAction";

function* getDocumentListApi() {
  try {
    let {data, status} = yield call(DocumentServices.getDocumentList);
    
    if (status === STATUS_CODE.SUCCESS) {
      yield put(setDocumentList(data.documentList));
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* addDocumentApi(action){
  try {
    let {data, status} = yield call(DocumentServices.addDocument,action.data);  
    if (status===STATUS_CODE.SUCCESS){
      Notification("success", "Thêm mới thành công",data.message);      
    }
    
  } catch (error) {
    console.log(error.message);
  }
    
  
}

function* DocumentSaga() {
  yield takeLatest(GET_DOCUMENT_LIST_API, getDocumentListApi);
  yield takeLatest(ADD_DOCUMENT_API, addDocumentApi);
}
export default DocumentSaga;
