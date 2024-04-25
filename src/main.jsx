import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import Root from './Root.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UpdateUser from './Pages/UpdateUser';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <PrivateRoute>
          <UpdateUser></UpdateUser>
        </PrivateRoute>,

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </>
)
