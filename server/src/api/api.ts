import axios from "axios";
import { Configuration } from "../configuration";
import { PatientDetailsModel } from "./models/patient-details-model";
import { PatientModel } from "./models/patient-model";

export const API = new class APIClass {
    private buildPath(pathname: string): string {
        if (!pathname.startsWith("/")) {
            pathname = `/${pathname}`;
        }

        return `${Configuration.API.host}${pathname}`;
    }

    public async GetPatients(): Promise<PatientModel[]> {
        const req = await axios.get(this.buildPath("/patients"));
        return req.data;
    }

    public async GetPatientDetails(id: number): Promise<PatientDetailsModel> {
        const req = await axios.get(this.buildPath(`/patientsDetails/${id}`));
        return req.data;
    }

    public async UpdatePatientDetails(id: number, model: PatientDetailsModel): Promise<void> {
        await axios.put<PatientDetailsModel>(this.buildPath(`/patientsDetails/${id}`), model);

        const patientModel: PatientModel = {
            id,
            fullName: `${model.firstName} ${model.lastName}`
        };
        await axios.put<PatientDetailsModel>(this.buildPath(`/patients/${id}`), patientModel);
    }
}();
