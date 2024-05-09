// RouterMap.js

// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Settings from './pages/Settings';
import Home from '../pages/home';
import NotFound from '../pages/home/404';

const RouterMap = [
  {
    path: '/',
    title: '首页',
    name: 'home',
    component: Home,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  }
];

export default RouterMap;
