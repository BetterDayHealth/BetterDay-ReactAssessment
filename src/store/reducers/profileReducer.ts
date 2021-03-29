import { PatientDetailsModel } from '../../models/patient-details-model';
import {
  PROFILE_LOADING,
  PROFILE_LOAD_FAIL,
  PROFILE_LOAD_SUCCESS,
  PROFILE_UPDATE_FAIL,
  ProfileDispatchTypes
} from '../actionTypes/profileActionTypes';


export interface ProfileStore {
  loading: boolean;
  profile?: PatientDetailsModel;
  updateFailMsg?: string;
}

const defaultState: ProfileStore = {
  loading: false
}

export const profileReducer = (state: ProfileStore = defaultState, action: ProfileDispatchTypes): ProfileStore => {
  switch (action.type) {
    case PROFILE_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case PROFILE_LOAD_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    }
    case PROFILE_LOAD_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case PROFILE_UPDATE_FAIL: {
      return {
        ...state,
        updateFailMsg: action.payload
      }
    }
    default: return state;
  }
}
