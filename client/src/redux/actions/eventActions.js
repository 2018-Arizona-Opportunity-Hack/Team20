import {
  FETCH_EVENTS,
  SIGNUP_EVENT,
} from './types';

import axios from 'axios';

export const fetchEvents = () => dispatch => {
  axios.get('/orgs/1/events')
  .then((response)=>{
    console.log('GETTING ALL EVENTS', response.data)
    dispatch({
      type: FETCH_EVENTS,
      payload: response.data
    })
  })
}

export const signupEvent = (name, phoneNumber, eventId) => dispatch =>{
  let postBody = {
    eventId: eventId,
    organizationId: 1,
    user: {
      name,
      phone: phoneNumber,
    }
  }
  axios.post('/register', postBody)
  .then(() => {
    fetchEvents()(dispatch);
  })
}
