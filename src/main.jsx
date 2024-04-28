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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllArt from './Pages/AllArt';
import AddCraft from './Pages/AddCraft';
import MyArtList from './Pages/MyArtList';
import Details from './Pages/Details';
import Update from './Pages/Update';
import ShowByCategory from './Pages/ShowByCategory';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: '/allart',
        element: <AllArt></AllArt>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: '/allCategory/:subcategory',
        element: <ShowByCategory></ShowByCategory>
      },
      {
        path: '/addcraft',
        element: <PrivateRoute>
          <AddCraft></AddCraft>
        </PrivateRoute>
      },
      {
        path: '/myart',
        element: <PrivateRoute>
          <MyArtList></MyArtList>
        </PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
