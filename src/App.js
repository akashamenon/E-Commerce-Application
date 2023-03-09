import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

import ResponsiveDrawer from './ResponsiveDrawer';
import Products from './Products';
import Posts from './Posts';
import Todos from './Todos';
import UsersListing from './UsersListing';

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
          <Route path="/profilepage" element={<ProfilePage />} />
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
