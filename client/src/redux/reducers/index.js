import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import adminEventRedcuer from './adminEventRedcuer'

export default combineReducers({
  events: eventReducer,
  adminEvent: adminEventRedcuer
})
