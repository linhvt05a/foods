import { fork,all } from 'redux-saga/effects'
import movieSaga from './movieSagas'

export default function* () {
    yield all ([
        fork(movieSaga) 
    ])
}