import {
  FETCH_EVENTS,
  SIGNUP_EVENT
} from '../actions/types';


export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
