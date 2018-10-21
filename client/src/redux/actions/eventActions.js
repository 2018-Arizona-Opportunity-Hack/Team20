import {
  FETCH_EVENTS,
  FETCH_EVENT
} from './types';

import axios from 'axios';
import moment from 'moment';

let sampleUserEventsData = [{
    "id": 1,
    "name": "This is a sample event",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 20,
    "volunteers": 17,
  },
  {
    "id": 2,
    "name": "This is a sample event #2",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 20,
    "volunteers": 19
  },
  {
    "id": 3,
    "name": "This is a sample event #3",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 30,
    "volunteers": 17
  },
  {
    "id": 4,
    "name": "This is a sample event #4",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 40,
    "volunteers": 21
  },
  {
    "id": 5,
    "name": "This is a sample event #5",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 10,
    "volunteers": 4
  },

  {
    "id": 6,
    "name": "This is a sample event #6",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 30,
    "volunteers": 27
  },
  {
    "id": 7,
    "name": "This is a sample event #7",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 40,
    "volunteers": 17
  },
  {
    "id": 8,
    "name": "This is a sample event #8",
    "time": `${new moment()}`,
    "org_id": 1,
    "volunteers_required": 15,
    "volunteers": 8
  },
]


export const fetchEvents = () => dispatch => {
  dispatch({
    type: FETCH_EVENTS,
    payload: sampleUserEventsData
  })
}

// when backend is up
// export const fetchEvents = () => dispatch => {
//   axios.get('')
//   .then((response)=>{
//     dispatch({
//       type: FETCH_EVENTS,
//       payload: response.data
//     })
//   })
// }

export const fetchEvent = (event_ID) => dispatch => {
  dispatch({
    type: FETCH_EVENT,
    payload: event_ID
  })
}