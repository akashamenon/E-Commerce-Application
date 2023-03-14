import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import Login from './account/login/Login';
import RegistrationPage from './account/register/RegistrationPage';
// import ProfilePage from './ProfilePage';

import ResponsiveDrawer from './common/side-navbar/ResponsiveDrawer';
import Products from './features/products/Products';
import Posts from './features/posts/Posts';
import Todos from './features/todos/Todos';
import UsersListing from './features/users/UsersListing';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {/* <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

       </Routes> */}

      { location.pathname === '/' || 
      location.pathname === '/profilePage' || 
      location.pathname === '/login' ?
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          {/* <Route path="/profilepage" element={<ProfilePage />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
        :
        <>
          <ResponsiveDrawer />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/userListing" element={<UsersListing />} />
            <Route path="/todo" element={<Todos />} />

          </Routes>
        </>
  }
    </div>
  );
}

export default App;
