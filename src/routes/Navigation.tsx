import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <>
        {/* <nav>
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
        </nav> */}
        <Routes>
          <Route path="/sign-in" element={ <SignInScreen /> } />
          <Route path="/sign-up" element={ <SignUpScreen /> } />
          <Route path="/*" element={ <Navigate to="/" replace /> } />
        </Routes>
      </>
    </BrowserRouter>
  );
}