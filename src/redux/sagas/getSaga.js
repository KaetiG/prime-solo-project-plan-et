import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNatal(action) {
    try {
        const getResponse = yield axios.get('/api/user/natalchart');
        yield put({ type: 'SET_NATAL', payload: getResponse.data })
      } catch(error) {
        console.log('error getting chart info', error);
      }
}

function* getOnePost(action) {
  try {
  const getResponse = yield axios.get('/api/user/singlepost/' + action.payload.id);
  console.log('get one post saga', getResponse.data);
      yield put({ type: 'SET_ONE_POST', payload: getResponse.data })
    } catch(error) {
      console.log('error posting entry', error);
    }
}

function* getSaga() {
    yield takeLatest('GET_NATAL_CHART', getNatal);
    yield takeLatest('GET_SINGLE_POST', getOnePost);
  }
  
  export default getSaga;