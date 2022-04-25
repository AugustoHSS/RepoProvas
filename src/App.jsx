import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Tests from './Pages/Tests';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Tests />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
