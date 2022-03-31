import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import receiptReducer from './receiptReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  receipt: receiptReducer,
  task: taskReducer
});

