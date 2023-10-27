import { Route, Routes, useSearchParams} from 'react-router-dom';
import Landing from '../pages/Landing';
import InviteContext from '../context/InviteContext';
import { useState } from 'react';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/user/Dashboard';
import Layout from '../components/user/Layout';
import Cycle from '../pages/user/Cycle';
import Wallet from '../pages/user/Wallet';
import Profile from '../pages/user/Profile';
import ErrorPage from '../pages/error-page';

import AdminLayout from '../components/admin/Layout';
import Admin from '../pages/admin/Admin';
import Withdraw from '../pages/admin/Withdraw';
import Investment from '../pages/admin/Investment';
import Users from '../pages/admin/Users';
import AdminRoute from './AdminRoute';

const Routers = () => {

  const [searchParams, setSearchParams] = useSearchParams();
	const inv = searchParams.get('invite');

  const [invId, setInvId] = useState( searchParams.get('invite'));

  return (

    <InviteContext.Provider value={{invId, setInvId}}>    
      <Routes>
        <Route path='/' element={<Landing />} errorElement={<ErrorPage/>} />
        <Route path='/user' element={<Landing />} />
        <Route element={<PrivateRoute/>}>
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cycle' element={<Cycle />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/wallet' element={<Wallet />} />
          </Route>
        </Route>
        <Route element={<AdminRoute/>}>
          <Route element={<AdminLayout />}>
            <Route path='/admin' element={<Admin />} />
            <Route path='/users' element={<Users />} />
            <Route path='/investment' element={<Investment />} />
            <Route path='/withdraw' element={<Withdraw />} />
          </Route>
        </Route>
      </Routes>
    </InviteContext.Provider>
  );
};
export default Routers;
