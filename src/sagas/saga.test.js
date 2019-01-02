import { call, put, takeEvery } from "redux-saga/effects";
import * as TYPES from './../constants'

function* startTest() {
    console.log("Thang");
}

function* watchTest() {
    yield takeEvery(TYPES.TEST, startTest);
}

export {
    watchTest
}