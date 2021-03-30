import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

interface ProfiImageProps {
  src: string;
  imgAlt: string;
}


const ProfileImage: React.FC<ProfiImageProps> = ({ src, imgAlt }) => {
  const classes = useStyles();
  return (
    <Box my={2}>
      <img src={src} alt={`${imgAlt}`} className={classes.img} />
    </Box>
  )
}

export default ProfileImage;
