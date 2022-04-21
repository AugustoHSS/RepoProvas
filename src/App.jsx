import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
