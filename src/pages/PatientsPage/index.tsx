import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import PatientsList from './PatientsList';
import { RootStore } from '../../store';
import { getPatients } from '../../store/actions/patientActions';
import { PatientModel } from '../../models/patient-model';


interface PatientsPageProps {
  patients: PatientModel[],
  loading: boolean;
  getPatients: () => void;
}

class PatientsPage extends Component<PatientsPageProps> {
  componentDidMount() {
    this.props.getPatients();
  }

  render() {
    return (

      <Container>
        <h1>Patient list</h1>
        {
          this.props.loading
            ? <CircularProgress />
            : this.props.patients.length === 0
              ? <Typography variant="h3">There are no patients</Typography>
              : <PatientsList patients={this.props.patients} />
        }
      </Container>
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  patients: state.patientsState.patients,
  loading: state.patientsState.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  getPatients: () => dispatch(getPatients())
})


export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage);
