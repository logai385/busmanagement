import { put, takeLatest, call } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import {
  LOCAL_STOGARE_TOKEN_NAME,
  STATUS_CODE,
} from "../../util/Constants/SystemSettings";
import { GET_AUTH_API, SET_AUTHTOKEN } from "../Constants/AuthConst";
import {useHistory} from 'react-router-dom'

function* loginUser(action) {
  try {
    
    let response = yield call(AuthService.loginUser, action.userForm);

    if (response.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: SET_AUTHTOKEN,
        isAuthenticated: true,
      });
      localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, response.data.accessToken);
      
    }
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
function* AuthAction() {
  yield takeLatest(GET_AUTH_API, loginUser);
}
export default AuthAction;
