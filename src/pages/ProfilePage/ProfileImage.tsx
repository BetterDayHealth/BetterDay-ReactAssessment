import Box from '@material-ui/core/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface ProfiImageProps {
  src: string;
  imgAlt: string;
}

const useStyles = makeStyles({
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

const ProfileImage = ({ src, imgAlt }: ProfiImageProps) => {
  const classes = useStyles();
  return (
    <Box my={2}>
      <img src={src} alt={`${imgAlt}`} className={classes.img} />
    </Box>
  )
}

export default ProfileImage;
