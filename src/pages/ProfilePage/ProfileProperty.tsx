import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
interface ProfilePropertyProps {
  name: string;
  value: string;
}

const ProfileProperty = ({ name, value }: ProfilePropertyProps) => {
  return (
    <Box mt={1}>
      <Grid container>
        <Grid item xs={6}>
          <Box component="span">{name}</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="strong">{value}</Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ProfileProperty
