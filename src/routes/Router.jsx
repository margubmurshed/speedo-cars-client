import {createBrowserRouter} from 'react-router-dom'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

export const router = createBrowserRouter([
    {path: '/', element: <PrimaryLayout />, children: [
        {index: true, element: <Home />},
        {path:'login', element: <Login />},
    ]}
])