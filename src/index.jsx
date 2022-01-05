import { render } from 'react-dom';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';
import App from './App';

render(
  <UserProvider>
    <EntryProvider>
      <App />
    </EntryProvider>
  </UserProvider>,
  document.getElementById('root')
);
