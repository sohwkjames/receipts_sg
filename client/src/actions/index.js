import axios from 'axios';
import { FETCH_USER, SUBMIT_SURVEY } from './types';

export const fetchUser = () => {
  return async function(dispatch) {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data });
  }
};

// make a constant that points to a async function
// the async function takes a dispatch param by default
export const handleToken = (token) => {
  return async function(dispatch) {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data })
  }
}

export const submitReceipt = (values, history) => {  
  return async function (dispatch) {
    const res = await axios.post('api/receipts', values);
    history.push('/');
    // return res;
  }
}

export const fetchReceipts = () => {
  return async function(dispatch) {
    const res = await axios.get('api/receipts');
    return res.data;
  }
}

export const adminDeleteAllReceipts = () => {
  return async function(dispatch) {
    const res = await axios.get('/api/receipts/delete');
    return res;
  }
}
