import SignIn from "./Components/Auth/SignIn";
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div>
      <div class="container">

        <h1> ISODS </h1>
      </div>
      
      <SignIn />
    </div>
  );
}

export default App;
