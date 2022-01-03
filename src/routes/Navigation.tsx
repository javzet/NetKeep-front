import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import AuthScren from '../screens/SignInScreen';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={ <AuthScren /> } />
          <Route path="/*" element={ <Navigate to="/" replace /> } />
        </Routes>
      </>
    </BrowserRouter>
  );
}