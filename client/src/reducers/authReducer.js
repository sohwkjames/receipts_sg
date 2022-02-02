import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // action is of shape: 
  // { type: 'some_string', payload: { _id: '123', googleId: '234 ...} }
  console.log(action);
  switch(action.type) {
    case FETCH_USER: 
      return action.payload || false;
    default:
      return state;
  }
};
