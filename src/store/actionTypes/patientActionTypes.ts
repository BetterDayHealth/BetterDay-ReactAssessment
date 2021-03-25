import { PatientModel } from '../../models/patient-model';

export const PATIENTS_LOADING = 'PATIENTS_LOADING';
export const PATIENTS_LOAD_FAIL = 'PATIENTS_LOAD_FAIL';
export const PATIENTS_LOAD_SUCCESS = 'PATIENTS_LOAD_SUCCESS';

export interface PatientsLoading {
  type: typeof PATIENTS_LOADING
}

export interface PatientsLoadSuccess {
  type: typeof PATIENTS_LOAD_SUCCESS,
  payload: PatientModel[]
}

export interface PatientsLoadFail {
  type: typeof PATIENTS_LOAD_FAIL
}

export type PatientDispatchTypes = PatientsLoading | PatientsLoadSuccess | PatientsLoadFail;
