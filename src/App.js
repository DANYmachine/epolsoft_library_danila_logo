import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import { Layout } from './layout/layout'
import AppLayout from './layout/appLayout'
import UserProfile from './pages/userProfile'
import AdminPage from './pages/adminPage'
{/* <Route path='/' element={<Layout />}> */ }

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/profile' element={<UserProfile />} />
    <Route path='/admin' element={<AdminPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
));

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
