import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import LandingPage from './pages/HomePage/HomePage';


const App = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage></LandingPage>}
      />

      <Route
        path="/register"
        element={<SignupPage></SignupPage>}
      />


      <Route
        path="/login"
        element={<LoginPage></LoginPage>}
      />
    </Routes>
  );
};

export default App;
