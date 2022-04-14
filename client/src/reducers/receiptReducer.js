import { FETCH_RECEIPTS, ADD_RECEIPT } from "../actions/types";

export default function(state = [], action) {
  switch(action.type) {
    case 'receipts/receiptsLoaded': {
      // action called when receiptList loads up for the first time
      return action.payload
    }

    case 'receipts/receiptAdded': {
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

