import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ErrorPage from "./components/Error/ErrorPage";
import EstateDetails from "./components/EstateDetails/EstateDetails";
import { HelmetProvider } from "react-helmet-async";
import TermsOfService from "./components/TermsOfService/TermsOfService";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/estate-details/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/residentialData.json"),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/terms-of-service",
        element: (
          <PrivateRoute>
            <TermsOfService></TermsOfService>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer></ToastContainer>
  </AuthProvider>
);
