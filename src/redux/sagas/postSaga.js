import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPost(action) {
    try {
    const getResponse = yield axios.get('/api/user/posts/' + action.payload);
        yield put({ type: 'SET_POSTS', payload: getResponse.data })
      } catch(error) {
        console.log('error posting entry', error);
      }
}

function* newPost(action) {
    try {
        yield axios.post('/api/user/posts', action.payload);
        console.log(action.payload)
      } catch(error) {
        console.log('error posting entry', error);
      }
}

function* postSaga() {
    yield takeLatest('GET_POST_HISTORY', getPost);
    yield takeLatest('POST_ENTRY', newPost);
    
  }
  
  export default postSaga;