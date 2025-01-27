import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/errorPage';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Resume } from './pages/resume';
import App from './App';

const router = createBrowserRouter([{path: "/", element: <App/>, errorElement: <ErrorPage/>,
  children: [{
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "resume",
    element: <Resume />,
  }
  // {
      //   path: "projects/",
      //   element: <ProjectsPage />,
      // },
      // {
      //   path: "projects/:projectName",
      //   element: <ProjectPages />,
      // },
      // {
      //   path: "fun/",
      //   element: <FunPage />,
      // },
      // {
      //   path: "fun/:projectName",
      //   element: <FunPages />,
      // },
    ]}
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
