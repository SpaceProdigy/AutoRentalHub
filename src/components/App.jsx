import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import { Header, Link } from './Header.styled';

import Spiner from '../utility/LinearLoader/LinearLoader';
import ScrollToTop from 'utility/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <div>
      <Header>
        <Link to="/">
          <HomeIcon />
          <p>Home</p>
        </Link>

        <nav>
          <Link to="/catalog">
            <TimeToLeaveIcon />
            <p> Catalog</p>
          </Link>
          <Link to="/favorites">
            <BookmarksIcon />
            <p> Favorites</p>
          </Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Spiner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
      </main>
    </div>
  );
};
