import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HajjUmrah from './pages/HajjUmrah';
import NotFound from './pages/NotFound';
import Training from './pages/Training';
import Promotions from './pages/Promotions';
import PricePackages from './pages/PricePackages';
import AgencyBenefits from './pages/AgencyBenefits';
import PlatformFeatures from './pages/PlatformFeatures';
import AgencyOperations from './pages/AgencyOperations';

const websiteRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'operations',
        element: <AgencyOperations />,
      },
      {
        path: 'hajj-umrah',
        element: <HajjUmrah />,
      },
      {
        path: 'training',
        element: <Training />,
      },
      {
        path: 'platform-features',
        element: <PlatformFeatures />,
      },
      {
        path: 'agency-benefits',
        element: <AgencyBenefits />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default websiteRoutes;