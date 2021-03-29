import { PatientDetailsModel } from '../../models/patient-details-model';

export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_LOAD_FAIL = 'PROFILE_LOAD_FAIL';
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS';
export const PROFILE_UPDATE_FAIL = 'PROFILE_UPDATE_FAIL';

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

export interface ProfileUpdateFail {
  type: typeof PROFILE_UPDATE_FAIL
  payload: string
}

export type ProfileDispatchTypes = ProfileLoading | ProfileLoadSuccess | ProfileLoadFail | ProfileUpdateFail;
