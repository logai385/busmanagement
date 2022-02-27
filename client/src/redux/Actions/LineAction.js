import {call, put, takeLatest} from 'redux-saga/effects';
import LineService from '../../services/LineServices';
import { STATUS_CODE } from '../../util/Constants/SystemSettings';
import { GET_LINE_LIST_API, SET_LINE_LIST } from '../Constants/LineConst';
function* getLineListApi(){
    try {
        const response = yield call(LineService.getLineList);
        
        if (response.status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_LINE_LIST,
                lineList: response.data.lines,
            });
        }
    } catch (error) {
        console.log(error.message)
    }
}
function * LineAction(){
    yield takeLatest(GET_LINE_LIST_API, getLineListApi);
}
export default LineAction;