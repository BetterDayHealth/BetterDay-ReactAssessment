import { PatientModel } from '../../models/patient-model';

interface Props {
  patients: PatientModel[]
}

const PatientsList: React.FC<Props> = ({ patients }) => {
  return (
    <div>Currently {patients.length} patients</div>
  );
}

export default PatientsList;
