import {
  FETCH_EVENTS,
  FETCH_EVENT
} from '../actions/types';


export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return [...state, ...action.payload];

    case FETCH_EVENT:
      let event = state.filter((event) => event.id === action.payload)
      return event;

    default:
      return state;
  }
}