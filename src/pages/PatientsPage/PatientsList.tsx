import { PatientModel } from '../../models/patient-model';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

interface Props {
  patients: PatientModel[]
}

const PatientsList: React.FC<Props> = ({ patients }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map(({ id, fullName }) =>
            <TableRow key={id} >
              <TableCell >
                <Link to={`/profile/${id}`} >{fullName}</Link>
              </TableCell>
            </TableRow >
          )}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default PatientsList;
