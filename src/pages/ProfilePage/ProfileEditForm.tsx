import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { PatientDetailsModel } from '../../models/patient-details-model';
import { AddressModel } from '../../models/address-model';


const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().min(2, 'Too short').max(12, 'Too long').required('Password is required'),
  image: yup.string().required('Image is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  phoneNumber: yup.string().required('Phone number is required'),
})


const PatientEditForm = ({ id, address, ...props }: PatientDetailsModel) => {

  const [showAddressInputs, setShowAddressInputs] = useState<Boolean>(Boolean(address));

  const formik = useFormik({
    initialValues: { ...props, ...address },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Typography component="h2" variant="h4">Update Profile</Typography>
      <Box mt={2}>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="image"
                  name="image"
                  label="Image source"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  error={formik.touched.image && Boolean(formik.errors.image)}
                  helperText={formik.touched.image && formik.errors.image}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of birth"
                  type="date"
                  defaultValue={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <TextField
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} >
                <Box display="flex" justifyContent="space-between">
                  <Typography component="h3" variant="h6">Address</Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    color={showAddressInputs ? 'secondary' : 'primary'}
                    onClick={() => setShowAddressInputs(!showAddressInputs)}
                  >{showAddressInputs ? 'Remove address' : 'Add address'}
                  </Button>
                </Box>
              </Grid>
              {
                showAddressInputs
                  ?
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="address1"
                        name="address1"
                        label="Primary address"
                        value={formik.values.address1}
                        onChange={formik.handleChange}
                        error={formik.touched.address1 && Boolean(formik.errors.address1)}
                        helperText={formik.touched.address1 && formik.errors.address1}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="address2"
                        name="address2"
                        label="Secondary address"
                        value={formik.values.address2}
                        onChange={formik.handleChange}
                        error={formik.touched.address2 && Boolean(formik.errors.address2)}
                        helperText={formik.touched.address2 && formik.errors.address2}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        id="zipCode"
                        name="zipCode"
                        label="Zip code"
                        value={formik.values.zipCode}
                        onChange={formik.handleChange}
                        error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                        helperText={formik.touched.zipCode && formik.errors.zipCode}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        id="city"
                        name="city"
                        label="Zip code"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        id="state"
                        name="state"
                        label="State"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state}
                      />
                    </Grid>
                  </>
                  : null
              }
              <Grid item xs={12}><Divider /></Grid>


            </Grid>
          </Box>
          <Button type="submit" variant="contained" color="primary">Update Profile</Button>
        </form>
      </Box>
    </>
  );
}

export default PatientEditForm
