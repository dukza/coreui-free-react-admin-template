import React from 'react';


// Layout
const Main = React.lazy(() => import('./layout/Main'));
const Sub = React.lazy(() => import('./layout/Sub'));

//Page
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Page = React.lazy(() => import('./views/pages/sub/Page'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, layout: Main },
  { path: '/enrollment', name: 'enrollment', component: Page,layout: Sub },
  { path: '/arrival', name: 'arrival',  component: Page, layout: Sub  },


];

export default routes;