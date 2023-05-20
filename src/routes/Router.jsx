import {createBrowserRouter} from 'react-router-dom'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
    {path: '/', element: <PrimaryLayout />, children: [
        {index: true, element: <Home />}
    ]}
])