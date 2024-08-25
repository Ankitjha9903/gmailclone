import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inbox from './components/Inbox';
import Navbar from './components/shared/Navbar';
import Sidebar from './components/Sidebar';
import Mybody from './components/Mybody';
import Mail from './components/Mail';
import SendMail from './components/SendMail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mybody />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },

    ]
  }
])

function App() {
  return (
    <div className='bg-[#f6f8fc] h-screen w-screen overflow-hidden'>
      <Navbar />
      <RouterProvider router={router}/>
   <div className='absolute w-[30%] bottom-0 right-20 z-10'>
    <SendMail/>
   </div>
      
    </div>
  );
}

export default App;
