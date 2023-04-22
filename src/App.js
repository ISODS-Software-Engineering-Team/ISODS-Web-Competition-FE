import UserSignIn from "./Components/Auth/UserSignIn";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import './App.css';
import * as React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import ResetPassword from "./Components/Auth/ResetPassword";
import ActivateAccount from "./Components/Auth/ActivateAccount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/signin' element={<UserSignIn />} />
          <Route exact path='/forgot' element={<ForgotPassword />} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPassword />} />
          <Route exact path='/activate/:uid/:token' element={<ActivateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
