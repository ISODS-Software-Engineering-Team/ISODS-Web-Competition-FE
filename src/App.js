import SignIn from "./Components/SignIn";
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div>
    <h1> Hello </h1>
    <SignIn />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={SignIn} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
