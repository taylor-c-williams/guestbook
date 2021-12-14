import { render } from 'react-dom';
import { UserProvider } from './context/UserContext'
import App from './App';

render(
<UserProvider>
<App />
</UserProvider>
, document.getElementById('root'));
