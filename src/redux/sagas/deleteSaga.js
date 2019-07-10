import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deletePost(action) {
    try {
        yield axios.delete('/api/user/posts/' + action.payload.id);
        yield put({ type: 'CLEAR_POSTS' });
        yield put({ type: 'GET_POST_HISTORY', payload: action.payload.user });
    } catch (error) {
        console.log('error deleting post', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_POST', deletePost);

}

export default deleteSaga;