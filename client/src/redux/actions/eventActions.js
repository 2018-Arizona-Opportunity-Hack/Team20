import {
  FETCH_EVENTS,
  SIGNUP_EVENT,
} from './types';

import axios from 'axios';
import moment from 'moment';

export const fetchEvents = () => dispatch => {
  axios.get('/orgs/1/events')
  .then((response)=>{
    dispatch({
      type: FETCH_EVENTS,
      payload: response.data
    })
  })
}

export const signupEvent = (name, phoneNumber, eventId, history) => dispatch =>{
  let postBody = {
    eventId: eventId,
    organizationId: 1,
    user: {
      name,
      phone: phoneNumber,
    }
  }
  axios.post('/register', postBody)
      .then(()=>{
        history.push('/dashboard')
      })
}
