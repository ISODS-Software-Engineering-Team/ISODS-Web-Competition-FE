import UserSignIn from "./Components/Auth/UserSignIn";
import './App.css';
import * as React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<UserSignIn />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
