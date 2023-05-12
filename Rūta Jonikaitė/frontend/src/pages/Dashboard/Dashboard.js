import React from 'react'
import HeaderTop from './HeaderTop';
import Footer from '../../component/Footer';
import AdminDashboard from './AdminDashboard';
import TabsForDashboard from './TabsForDashboard';
import UserDashboard from './UserDashboard';
import adminPageStructure from '../../data/adminPageStructure.js';
import userPageStructure from '../../data/userPageStructure';

const Dashboard = ({tipas}) =>{
const Components = {
    HeaderTop, 
    Footer,
    AdminDashboard,
    TabsForDashboard,
    UserDashboard
  }
  
const getUserComponents = userAuthLevel => {
     if (userAuthLevel === 'user') {
       return userPageStructure
     }
     else if (userAuthLevel === 'admin'){
        return adminPageStructure
     }
    }
     
  const userComponents = getUserComponents(tipas);
     return (
        <div>
            {userComponents.map(componentName => {
                const Component = Components[componentName];
                return <Component/>
             })}
        </div>
    )
  

}

export default Dashboard