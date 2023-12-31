import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const ManageUsers = lazy(() => import("../views/User.js"));
const ChangePassword = lazy(() => import("../views/ChangePassword.js"));
const UserProfile = lazy(() => import("../views/UserProfile.js"));
const AdminLogin = lazy(() => import("../Auth/Login.js"));
const Reports = lazy(() => import("../views/Reports.js"));
const About = lazy(() => import("../views/About.js"));
const Tracking = lazy(() => import("../views/AddTracking.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
// const Grid = lazy(() => import("../views/ui/Grid"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/manage-users", exact: true, element: <ManageUsers /> },
      { path: "/change-password", exact: true, element: <ChangePassword /> },
      { path: "/user-profile", exact: true, element: <UserProfile /> },
      { path: "/reports", exact: true, element: <Reports /> },
      { path: "/tracking", exact: true, element: <Tracking /> },
      { path: "/about", exact: true, element: <About /> }
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      // { path: "/table", exact: true, element: <Tables /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ]
  },
  {
    path: "/",

    children: [{ path: "/login", exact: true, element: <AdminLogin /> }]
  }
];

export default ThemeRoutes;
