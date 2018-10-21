import {
    FETCH_EVENT_ADMIN
} from './types';

import axios from 'axios';

export const fetchEventAdmin = (event_id) => dispatch => {
    axios.get(`/event/${event_id}`)
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: FETCH_EVENT_ADMIN,
                payload: response.data
            })
        })
}
