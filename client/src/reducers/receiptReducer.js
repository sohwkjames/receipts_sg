import { FETCH_RECEIPTS } from "../actions/types";

export default function(state = [], action) {
  switch(action.type) {
    
    case FETCH_RECEIPTS:
      console.log('in receiptReducer, fetch receipts branch');
      return action.payload;
    default:
      console.log('in receiptReducer, default branch');
      return state;
  }
};

