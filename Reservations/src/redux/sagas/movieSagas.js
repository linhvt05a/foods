import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {api} from '../../sevices'
import * as types from '../types'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMovie(action) {
   try {
      const res = yield call(api.getMovive);
      yield put({type: types.GET_MOVIE_SUCCESS, res: res});
   } catch (e) {
      yield put({type: types.GET_MOVIE_FAILURE, message: e.message});
   }
}

function* movieSaga() {
  yield takeEvery(types.GET_MOVIE_REQUEST, fetchMovie);
}

export default movieSaga;