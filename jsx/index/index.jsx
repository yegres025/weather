import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App/App';
import ErrorMessage from '../Error/Error';
import FaqInfo from '../SplitSpace/RightSpace/Faq/FaqInfo';
import FavoritCities from '../SplitSpace/RightSpace/FavoritCities/FavoritCities';
const root = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: '/faq',
        element: <FaqInfo />,
      },
      {
        path: '/list',
        element: <FavoritCities />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);

