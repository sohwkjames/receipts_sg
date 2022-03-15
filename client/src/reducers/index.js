import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import receiptReducer from './receiptReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  receipt: receiptReducer
});

