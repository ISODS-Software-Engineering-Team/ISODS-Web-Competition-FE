import UserSignIn from "./Components/Auth/UserSignIn";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import './App.css';
import * as React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import ResetPassword from "./Components/Auth/ResetPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<UserSignIn />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword' element ={<ResetPassword />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
