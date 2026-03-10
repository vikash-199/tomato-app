import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../main';
import toast from 'react-hot-toast';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responceGoogle = async (authResult: any) => {
    setLoading(true);
    try {
      const result = await axios.post(`${authService}/api/auth/login`, {
        code: authResult['code'],
      });
      localStorage.setItem('token', result.data.token);
      toast.success(result.data.message);
      setLoading(false);
      navigate('/');
    } catch (err) {
      toast.error('Problem while lohin.');
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responceGoogle,
    onError: responceGoogle,
    flow: 'auth-code',
  });
  return (
    <div className="flex min-h-screen item-center justify-center bg-white px-4">
      <div className="flex min-h-s"></div>
    </div>
  );
};

export default Login;
