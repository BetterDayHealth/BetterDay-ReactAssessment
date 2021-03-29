import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ProfileImage from './ProfileImage';
import ProfileAddress from './ProfileAddress';
import ProfileProperty from './ProfileProperty';
import ProfileEditForm from './ProfileEditForm';

import { PatientDetailsModel } from '../../models/patient-details-model';

interface ProfileProps {
  profile: PatientDetailsModel
}

const Profile = ({ profile }: ProfileProps) => {
  const {
    firstName,
    lastName,
    image,
    dateOfBirth,
    phoneNumber,
    address
  } = profile;
  return (
    <Box mt="1rem">
      <Grid container spacing={6} >
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h1">{firstName} {lastName}</Typography>
          <ProfileImage src={image} imgAlt={`${firstName} ${lastName}`} />
          <ProfileProperty name="Date of Birth" value={dateOfBirth} />
          <ProfileProperty name="Phone Number" value={phoneNumber} />
          <Box mt={1}>
            <Box component="span">Address: </Box>
            {address === undefined ? <Box component="span">no data</Box> : <ProfileAddress {...address} />}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileEditForm {...profile} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile;

