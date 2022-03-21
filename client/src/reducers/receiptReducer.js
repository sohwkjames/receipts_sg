import { FETCH_RECEIPTS, ADD_RECEIPT } from "../actions/types";

const initialState = [];

export default function(state = [], action) {
  switch(action.type) {
    case 'receipts/receiptsLoaded': {
      // action called when receiptList loads up for the first time
      console.log('receipts/receiptsLoaded action fired, payload:', action.payload)
      return action.payload
    }

    case 'receipts/receiptAdded': {
      console.log('receiptAdded action fired, payload is:', action.payload);
      return state;
    }

    case FETCH_RECEIPTS:
      return state;
    case ADD_RECEIPT: {
      return [
        ...state,
        action.payload
      ]
    }
    default:
      return state;
  }
};

