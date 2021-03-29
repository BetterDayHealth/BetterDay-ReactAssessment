import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { ProfileRouteParams } from '../../types/routeParamTypes';
import { RootStore } from '../../store';
import { getProfile, updateProfile } from '../../store/actions/profileActions';
import { PatientDetailsModel } from '../../models/patient-details-model';
import ProfileEditForm from './ProfileEditForm';

import Profile from './Profile';

const ProfilePage: React.FC = () => {

  const dispatch = useDispatch();
  const { patientId }: ProfileRouteParams = useParams();
  const { profile, loading } = useSelector((state: RootStore) => state.profileState);
  console.log({ profile, loading });

  useEffect(() => {
    dispatch(getProfile(+patientId))
  }, []);

  const updatePatient = (model: PatientDetailsModel) => {
    dispatch(updateProfile(model));
  }

  return (
    <Container>
      <Box pt="2rem">
        {
          loading
            ? <CircularProgress />
            : profile !== undefined
              ?
              <Grid container spacing={6} >
                <Grid item xs={12} sm={6}>
                  <Profile profile={profile} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ProfileEditForm profile={profile} updatePatient={updatePatient} />
                </Grid>
              </Grid>
              : <Typography>User not found</Typography>
        }
      </Box>
    </Container>
  )
}

export default ProfilePage;
