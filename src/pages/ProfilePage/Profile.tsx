import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileImage from './ProfileImage';
import ProfileAddress from './ProfileAddress';
import ProfileProperty from './ProfileProperty';

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
    <Box>
      <Typography variant="h4" component="h1">{firstName} {lastName}</Typography>
      <ProfileImage src={image} imgAlt={`${firstName} ${lastName}`} />
      <ProfileProperty name="Date of Birth" value={dateOfBirth} />
      <ProfileProperty name="Phone Number" value={phoneNumber} />
      <Box mt={1}>
        <Box component="span">Address: </Box>
        {address === undefined ? <Box component="span">no data</Box> : <ProfileAddress {...address} />}
      </Box>
    </Box>
  )
}

export default Profile;

