import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PatientsList from './PatientsList';

const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState([]);
  return (

    <Container>
      <h1>Patient list</h1>
      {
        (patients.length === 0)
          ? <Typography variant="h3">There are no patients</Typography>
          : <PatientsList patients={patients} />
      }
    </Container>
  )
}

export default PatientsPage;
