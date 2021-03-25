import { combineReducers } from 'redux';
import { patientReducer } from './patientReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
  patientsState: patientReducer,
  profileState: profileReducer,
});
