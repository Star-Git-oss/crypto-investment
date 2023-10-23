import { Route, Routes, useSearchParams} from 'react-router-dom';
import Landing from '../pages/Landing';
import InviteContext from '../context/InviteContext';
import { useState } from 'react';
import Dashboard from '../pages/user/Dashboard';
import Layout from '../components/user/Layout';
import Cycle from '../pages/user/Cycle';
import Wallet from '../pages/user/Wallet';
import Profile from '../pages/user/Profile';
import ErrorPage from '../pages/error-page';
import PrivateRoute from '../components/PrivateRoute';
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
      </Routes>
    </InviteContext.Provider>
  );
};
export default Routers;
