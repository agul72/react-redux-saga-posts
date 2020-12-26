import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_POSTS, REQUEST_POSTS} from "./types";
import {hideLoader, showAlert, showLoader} from "./appActions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

export function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({type: FETCH_POSTS, payload});
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert(e.message, 3000));
        yield put(hideLoader());
    }


}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json();
    return json;
}
