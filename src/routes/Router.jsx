import {createBrowserRouter} from 'react-router-dom'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import AuthLayout from '../layouts/AuthLayout'
import Signup from '../pages/Signup/Signup'

export const router = createBrowserRouter([
    {path: '/', element: <PrimaryLayout />, children: [
        {index: true, element: <Home />},
    ]},
    {path:'login', element: <AuthLayout><Login /></AuthLayout>},
    {path:'signup', element: <AuthLayout><Signup /></AuthLayout>},
])