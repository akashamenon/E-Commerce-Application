import {React} from 'react';
// import { useState } from 'react';
//import {useNavigator} from 'react-router-dom';

const ProfilePage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  
     return (
        <div class="container">
            Name: {userInfo.userName}
            Email: {userInfo.email}
        </div>
     );
}
     
             
             
             
export default ProfilePage