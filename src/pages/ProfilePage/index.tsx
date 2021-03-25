import Container from '@material-ui/core/Container';
import { useParams } from "react-router-dom";

import { ProfileRouteParams } from '../../types/routeParamTypes';

const ProfilePage: React.FC = () => {
  const { patientId }: ProfileRouteParams = useParams();

  return (
    <Container>
      <h1>Patient profile - {patientId}</h1>
    </Container>
  )
}

export default ProfilePage;
