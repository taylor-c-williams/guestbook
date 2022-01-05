import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  return (
    <>
      this is a private route
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
