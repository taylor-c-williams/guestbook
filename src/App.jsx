import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import './app.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
