import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import RoutingLoader from './Loader';

// Lazy load pages
const AddNewCounter = lazy(() => import('../pages/add-new-counter'));
const Settings = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/settings"
        element={
          <RoutingLoader>
            <Settings />
          </RoutingLoader>
        }
      />
      <Route
        path="/add-new-counter"
        element={
          <RoutingLoader>
            <AddNewCounter />
          </RoutingLoader>
        }
      />
      <Route
        path="*"
        element={
          <RoutingLoader>
            <NotFound />
          </RoutingLoader>
        }
      />
    </Routes>
  );
};

export default Routing;
