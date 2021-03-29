import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { ProfileRouteParams } from '../../types/routeParamTypes';
import { RootStore } from '../../store';
import { getProfile } from '../../store/actions/profileActions';

import Profile from './Profile';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const { patientId }: ProfileRouteParams = useParams();
  const { profile, loading } = useSelector((state: RootStore) => state.profileState);

  useEffect(() => {
    dispatch(getProfile(+patientId))
  }, []);

  return (
    <Container>
      <Box mt="2rem">
        {
          loading
            ? <CircularProgress />
            : profile !== undefined
              ? <Profile profile={profile} />
              : <Typography>User not found</Typography>
        }
      </Box>
    </Container>
  )
}

export default ProfilePage;
