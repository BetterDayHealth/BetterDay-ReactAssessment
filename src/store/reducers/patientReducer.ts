import { PatientModel } from '../../models/patient-model';

interface DefaultStateI {
  patients: PatientModel[]
}

const defaultState: DefaultStateI = {
  patients: []
}

export const patientReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
  return state;
}
