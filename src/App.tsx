import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import PatientsPage from './pages/PatientsPage/index';
import ProfilePage from './pages/ProfilePage/index';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/patients">
          <PatientsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
