import Box from '@material-ui/core/Box';
import ProfileProperty from './ProfileProperty';

import { AddressModel } from '../../models/address-model';

const ProfileAddress = ({
  address1,
  address2,
  zipCode,
  city,
  state
}: AddressModel) => {
  return (
    <Box ml={3}>
      <ProfileProperty name="Primary address" value={address1} />
      { address2 !== undefined ? <ProfileProperty name="Secondary address" value={address2} /> : null}
      <ProfileProperty name="Zip Code" value={zipCode} />
      <ProfileProperty name="City" value={city} />
      <ProfileProperty name="State" value={state} />
    </Box >
  )
}

export default ProfileAddress
