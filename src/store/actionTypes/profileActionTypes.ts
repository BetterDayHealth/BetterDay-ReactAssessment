import { PatientDetailsModel } from '../../models/patient-details-model';

export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_LOAD_FAIL = 'PROFILE_LOAD_FAIL';
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS';

export interface ProfileLoading {
  type: typeof PROFILE_LOADING
}

export interface ProfileLoadSuccess {
  type: typeof PROFILE_LOAD_SUCCESS,
  payload: PatientDetailsModel
}

export interface ProfileLoadFail {
  type: typeof PROFILE_LOAD_FAIL
}

export type ProfileDispatchTypes = ProfileLoading | ProfileLoadSuccess | ProfileLoadFail;
