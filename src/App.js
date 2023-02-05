
import { createBrowserRouter, RouterProvider 
 } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Verification from './pages/otp/Verification';
import NotFound from './pages/notfound/NotFound';

import './App.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage />
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signup",
    element:<SignUp />
  },
  {
  path:"/verify",
  element:<Verification />
},
{
  path:"'",
  element:<NotFound />
},

])
function App() {
  
  return (
    <>
    
   <RouterProvider router={router} />
    
   
    </>
  );
} 

export default App;
