import { Dashboard, LoginPage, ParkingsPage, UsersPage } from "../Pages";
import DefaultLayout from "../Layouts/DefaultLayout";
import AuthLayout from "../Layouts/AuthLayout";

const routes = [
  {
    path: '/admin',
    component: Dashboard,
  },
  {
    path: '/login',
    component: LoginPage,
    layout: null,
  },
  {
    path: '/admin/parkings',
    component: ParkingsPage,
  },
  {
    path: '/admin/users',
    component: UsersPage,
  },
];

export { routes }