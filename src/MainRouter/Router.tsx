import {createBrowserRouter} from 'react-router-dom'
import Homescreen from '../Pages/Homescreen.'
import Layout from '../Layout/Layou'



export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Homescreen/>
        }
    ]

},
])