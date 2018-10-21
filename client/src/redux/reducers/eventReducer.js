import {
  FETCH_EVENTS
} from '../actions/types';


export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      let org = {
        id: 1,
        address: "124 n. random st",
        name: "Paz de Cristo",
        phone: "123-123-1312",
      }
      return [...state, ...action.payload];

    default:
      return state;
  }
}


// /orgs/{orgId}/events"