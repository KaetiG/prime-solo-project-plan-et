import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPost(action) {
    try {
    const getResponse = yield axios.get('/api/user/posts/' + action.payload);
        yield put({type: 'CLEAR_POSTS'});
        yield put({ type: 'SET_POSTS', payload: getResponse.data })
      } catch(error) {
        console.log('error posting entry', error);
      }
}

function* newPost(action) {
    try {
        yield axios.post('/api/user/posts', action.payload);
        yield put({type: 'CLEAR_POSTS'});
        yield put({ type: 'GET_POST_HISTORY', payload: action.payload.id });
      } catch(error) {
        console.log('error posting entry', error);
      }
}

function* updatePost(action) {
  yield axios.put(`/api/user/posts/`+ action.payload.id, action.payload, action.payload.user);
  yield put({type: 'CLEAR_POSTS'});
  yield put({type: 'GET_POST_HISTORY', payload: action.payload.user})
}

function* postSaga() {
    yield takeLatest('GET_POST_HISTORY', getPost);
    yield takeLatest('POST_ENTRY', newPost);
    yield takeLatest('UPDATE_POST', updatePost);
  }
  
  export default postSaga;