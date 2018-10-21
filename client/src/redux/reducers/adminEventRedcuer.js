import {
    FETCH_EVENT_ADMIN
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_EVENT_ADMIN:
            return [action.payload];

        default:
            return state;
    }
}
