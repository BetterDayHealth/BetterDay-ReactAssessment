import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: "#eee",
      borderBottom: '1px solid #eee'
    },
    fontSize: '1.3rem',
    '&:not(:last-of-type)': {
      marginRight: '1rem'
    }
  },
  linkActive: {
    borderBottom: '1px solid #fff'
  }
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters={true}>
          <NavLink activeClassName={classes.linkActive} to="/patients" className={classes.link}>All Patients</NavLink>
          <NavLink activeClassName={classes.linkActive} to="/profile" className={classes.link}>Profile</NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
