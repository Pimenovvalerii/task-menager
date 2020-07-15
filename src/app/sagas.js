import { all, takeEvery, call, put, select} from 'redux-saga/effects';
import { CHANG_DATA, INIT_DATA } from './types';
import { setData } from './actions'
import { readBin, updateBin } from './api';
import * as moment from 'moment'

function* workChangeData({payload}) {
    yield put(setData(payload))
    updateBin(payload)
}

function* watchChangData() {
    yield takeEvery(CHANG_DATA, workChangeData)
}

function* workFetchData() {
    const response = yield call(readBin)
    response.todayData = response.todayData
        .filter( el => !el.everyday ? moment(el.date).format('DD MMM YYYY') === moment().format('DD MMM YYYY') : el ) 
    response.todayData.forEach( (el,id) => el.key = id + 1 )

    yield put(setData(response))
}

function* watchFetchData() {
    yield takeEvery(INIT_DATA,workFetchData)
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchChangData()
    ])
}