import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import LogIn from './pages/LogIn.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Default route
        element: <LogIn />, // Render HomePage by default
      },
      {
        path: '/homepage',
        element: <HomePage />, // Render LogIn for /login
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}