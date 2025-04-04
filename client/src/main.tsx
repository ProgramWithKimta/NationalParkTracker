import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import LogIn from './pages/LogIn.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,  // This ensures "/" goes to HomePage
        element: <HomePage />
      }, 
      {
        path: 'login', // ⬅️ Removed the leading slash
        element: <LogIn />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}

//older version before Hoa worked on adding 
// {
  //path: '/login',  // This will render the LogIn component at the "/login" path
  //element: <LogIn />
// },
//

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <LogIn />
//       }, 
//       {
//         path: '/login',
//         element: <LogIn />
//       }, 
//       {
//         path: '/HomePage',
//         element: <HomePage />
//       }
//     ]
//   }
// ]);