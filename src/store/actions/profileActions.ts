import { Dispatch } from 'redux';
import {
  PROFILE_LOADING,
  PROFILE_LOAD_FAIL,
  PROFILE_LOAD_SUCCESS,
  ProfileDispatchTypes
} from '../actionTypes/profileActionTypes';
import { PatientDetailsModel } from '../../models/patient-details-model';
import { PatientModel } from '../../models/patient-model';

import { API } from '../../api';

export const getProfile = (id: PatientModel['id']) => async (dispatch: Dispatch<ProfileDispatchTypes>) => {
  try {
    dispatch({
      type: PROFILE_LOADING
    });

    const profile: PatientDetailsModel = await API.GetPatientDetails(id);
    dispatch({
      type: PROFILE_LOAD_SUCCESS,
      payload: profile
    })
  } catch (e) {
    dispatch({
      type: PROFILE_LOAD_FAIL
    });
  }
};
