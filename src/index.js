import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './index.css';
import App from './App';
import { Home, About, Contact, Github,githubDataLoader, User } from './components';

// first way to using react-router-dom routes
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:'about',
//         element: <About />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       },
//       {
//         path:'github',
//         element: <Github />
//       }
//     ]
//   }
// ])

// better way to use react-router-dom
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* these route will take outlet places */}
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route 
        path='github' 
        element={<Github/>}
        loader={githubDataLoader}
      />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

