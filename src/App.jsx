import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

import Layout from './Layout';
import Login from './Pages/Login';
import Loading from './Components/Loading';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';

export default function App() {
  const { token } = useContext(AuthContext)
  return <>
    <RouterProvider router={router} />   
  </>
}
