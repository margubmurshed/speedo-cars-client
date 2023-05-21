import {createBrowserRouter} from 'react-router-dom'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import AuthLayout from '../layouts/AuthLayout'
import Signup from '../pages/Signup/Signup'
import ToyDetails from '../pages/ToyDetails/ToyDetails'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'

export const router = createBrowserRouter([
    {path: '/', element: <PrimaryLayout />, children: [
        {index: true, element: <Home />},
        {path: '/toy/:id', element: <PrivateRoute><ToyDetails /></PrivateRoute>},
    ]},
    {path:'login', element: <AuthRoute><AuthLayout><Login /></AuthLayout></AuthRoute>},
    {path:'signup', element: <AuthRoute><AuthLayout><Signup /></AuthLayout></AuthRoute>},
])