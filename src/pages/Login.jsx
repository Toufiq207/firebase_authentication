import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user); // true if logged in, false if not
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogin = () => {
    if (!email) return toast.error("Please enter your email");
    if (!password) return toast.error("Please enter your password");

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login done");
        setTimeout(() => navigate("/"), 2000);
      })
      .catch(() => {
        toast.error("Login failed");
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout done");
      })
      .catch(() => {
        toast.error("Logout failed");
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" />

      {!userLoggedIn ? (
        <>
          <div>
            <label>Email address</label><br/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='company@domain.com' /><br/>
          </div>
          <div>
            <label>Password</label><br/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='.....' />
          </div>
          <button onClick={handleLogin} className="text-amber-50 hover:text-black bg-black hover:bg-amber-50 border border-transparent hover:border-black py-2 px-4 rounded-2xl">
            Login
          </button>
        </>
      ) : (
        <button onClick={handleLogout} className="text-amber-50 hover:text-black bg-black hover:bg-amber-50 border border-transparent hover:border-black py-2 px-4 rounded-2xl">
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;