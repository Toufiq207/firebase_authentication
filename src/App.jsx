import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootPage from './assets/RootPage';
import Home from './Home';
import Login from './pages/Login';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootPage />}
    >
      <Route
        path="/"
        element={<Home />}
      >

      </Route>
      <Route
        path="/login"
        element={<Login />}
      >

      </Route>
    </Route>

  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App 