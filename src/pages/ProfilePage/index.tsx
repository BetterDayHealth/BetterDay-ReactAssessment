import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { ProfileRouteParams } from '../../types/routeParamTypes';
import { RootStore } from '../../store';
import { getProfile } from '../../store/actions/profileActions';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const { patientId }: ProfileRouteParams = useParams();
  const { profile, loading } = useSelector((state: RootStore) => state.profileState);

  useEffect(() => {
    dispatch(getProfile(+patientId))
  }, [dispatch]);

  return (
    <Container>
      <h1>Patient profile - {patientId}</h1>
      {
        loading
          ? <CircularProgress />
          : <>zjbs</>
      }
    </Container>
  )
}

export default ProfilePage;
