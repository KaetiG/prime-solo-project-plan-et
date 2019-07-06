import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newPost(action) {
    try {
        yield axios.post('/api/user/posts', action.payload);
        console.log(action.payload)
      } catch(error) {
        console.log('error posting entry', error);
      }
}

function* postSaga() {
    yield takeLatest('POST_ENTRY', newPost);
    
  }
  
  export default postSaga;