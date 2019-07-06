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

function* getSaga() {
    yield takeLatest('GET_NATAL_CHART', getNatal);
    
  }
  
  export default getSaga;