import { Dispatch } from 'redux';
import {
  PROFILE_LOADING,
  PROFILE_LOAD_FAIL,
  PROFILE_LOAD_SUCCESS,
  PROFILE_UPDATE_FAIL,
  ProfileDispatchTypes
} from '../actionTypes/profileActionTypes';
import { PatientDetailsModel } from '../../models/patient-details-model';
import { PatientModel } from '../../models/patient-model';

import { API } from '../../api';

export const getProfile = (id: PatientModel['id']) => async (dispatch: Dispatch<ProfileDispatchTypes>) => {
  try {
    dispatch({ type: PROFILE_LOADING });

    const profile: PatientDetailsModel = await API.GetPatientDetails(id);
    dispatch({ type: PROFILE_LOAD_SUCCESS, payload: profile })
  } catch (e) {
    dispatch({ type: PROFILE_LOAD_FAIL });
  }
};

export const updateProfile = (model: PatientDetailsModel) => async (dispatch: Dispatch<ProfileDispatchTypes>) => {
  try {
    await API.UpdatePatientDetails(model.id, model);
    getProfile(model.id);
  } catch (e) {
    dispatch({ type: PROFILE_UPDATE_FAIL, payload: 'Unsuccessful update' });
  }
}
