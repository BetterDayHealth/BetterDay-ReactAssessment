import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import PatientsList from './PatientsList';
import { RootStore } from '../../store';
import { getPatients } from '../../store/actions/patientActions';

const PatientsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { patients, loading } = useSelector((state: RootStore) => state.patientsState);

  useEffect(() => {
    dispatch(getPatients())
  }, [dispatch]);

  return (

    <Container>
      <h1>Patient list</h1>
      {
        loading
          ? <CircularProgress />
          : patients.length === 0
            ? <Typography variant="h3">There are no patients</Typography>
            : <PatientsList patients={patients} />
      }
    </Container>
  )
}

export default PatientsPage;
