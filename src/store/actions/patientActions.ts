import { Dispatch } from 'redux';
import {
  PATIENTS_LOADING,
  PATIENTS_LOAD_SUCCESS,
  PATIENTS_LOAD_FAIL,
  PatientDispatchTypes
} from './patientActionTypes';
import { PatientModel } from '../../models/patient-model';
import { API } from '../../api';

export const getPatients = () => async (dispatch: Dispatch<PatientDispatchTypes>) => {
  try {
    dispatch({
      type: PATIENTS_LOADING
    });

    const patients: PatientModel[] = await API.GetPatients();
    dispatch({
      type: PATIENTS_LOAD_SUCCESS,
      payload: patients
    })
  } catch (e) {
    dispatch({
      type: PATIENTS_LOAD_FAIL
    });
  }
};
