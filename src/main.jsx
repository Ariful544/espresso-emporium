import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import PagesLayout from './Layouts/PagesLayout';
import AddCoffee from './pages/AddCoffee';
import ViewDetails from './pages/ViewDetails';
import UpdateCoffee from './pages/UpdateCoffee';
import ErrorLayout from './Layouts/ErrorLayout';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';
import SignIn from './components/SignIn';
import PrivateRouter from './routes/PrivateRouter';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: () => fetch("https://espresso-emporium-server-36b6arxvl.vercel.app/"),
  },
  {
    path: '/coffees',
    element: <PagesLayout />,
    children: [
      {
        path: 'add-coffee',
        element: <AddCoffee />
      },
      {
        path: 'view-details/:id',
        loader: ({ params }) => fetch(`https://espresso-emporium-server-36b6arxvl.vercel.app/view-details/${params.id}`),
        element: <ViewDetails />
      },
      {
        path: 'update-coffee/:id',
        loader: ({ params }) => fetch(`https://espresso-emporium-server-36b6arxvl.vercel.app/update/${params.id}`),
        element: <UpdateCoffee />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'signin',
        element: <SignIn/>
      },
      {
        path: "users",
        loader: ()=> fetch("https://espresso-emporium-server-36b6arxvl.vercel.app/users"),
        element: <PrivateRouter><Users></Users></PrivateRouter>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorLayout />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
