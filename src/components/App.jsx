import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from 'redux/operations';
import { getCars } from 'redux/carSlice';
import { Header, Link } from './Header.styled';

import Spiner from '../utility/Spiner/Spiner';

// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import LoginIcon from '@mui/icons-material/Login';
// import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
// import AccountMenu from './IconMenu/IconMenu';
// import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const authentificated = useSelector(getCars);
  console.log(authentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  return (
    <div className="main">
      <Header>
        <Link to="/">
          <HomeIcon />
          Home
        </Link>

        <nav>
          <Link to="/catalog">
            <TimeToLeaveIcon />
            Catalog
          </Link>
          <Link to="/favorites">
            <BookmarksIcon />
            Favorites
          </Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Spiner />}>
          <Routes>
            {/* <Route path="/" element={<Home />}> */}
            {/* <Route path="/catalog" element={<Register />} />
              <Route path="/favorites" element={<Login />} /> */}
            {/* </Route> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
