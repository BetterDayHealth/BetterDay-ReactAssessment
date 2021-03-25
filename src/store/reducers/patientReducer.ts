import { PatientModel } from '../../models/patient-model';
import {
  PATIENTS_LOADING,
  PATIENTS_LOAD_FAIL,
  PATIENTS_LOAD_SUCCESS,
  PatientDispatchTypes

} from '../actions/patientActionTypes'

export interface PatientStore {
  loading: boolean,
  patients: PatientModel[]
}

const defaultState: PatientStore = {
  loading: false,
  patients: []
}

export const patientReducer = (state: PatientStore = defaultState, action: PatientDispatchTypes): PatientStore => {
  switch (action.type) {
    case PATIENTS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case PATIENTS_LOAD_SUCCESS: {
      return {
        ...state,
        patients: action.payload,
        loading: false
      }
    }
    case PATIENTS_LOAD_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    default: return state;
  }
}
