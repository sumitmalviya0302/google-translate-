
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import FeedbackLink from './components/FeedbackLink'
function App() {

  return (
    <>
      <TopBar />
      <NavBar />
      <Body />
      <Outlet />
      <FeedbackLink />
      <Footer />
    </>
  )
}



export default App;
