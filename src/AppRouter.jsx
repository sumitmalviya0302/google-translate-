import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import ForTextTab from './components/ForTextTab'
import ForDocumentTab from './components/ForDocumentTab'
import ForImageTab from './components/ForImageTab'
import ForWebsiteTab from './components/ForWebsiteTab'
import Error from './components/Error'


const AppRouter = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      errorElement:<Error />,
      children:[
        {
            path:'/',
            element:<ForTextTab />
        },
        {
            path:'/documents',
            element:<ForDocumentTab />
        },
        {
            path:'/images',
            element:<ForImageTab />
        },
        {
            path:'/website',
            element:<ForWebsiteTab />
        }
      ]
    },
    
  ])

export default AppRouter