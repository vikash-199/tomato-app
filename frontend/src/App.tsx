import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/protectedRoute';
import PublicRoute from './components/publicRoute';
import SelectRole from './pages/SelectRole';
import Navbar from './components/navbar';
import { Account } from './pages/Account';
import { useAppData } from './context/AppContext';
import Restrauant from './pages/Restrauant';

const App = () => {
  const { user } = useAppData();
  if (user && user.role === 'seller') {
    return <Restrauant />;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
