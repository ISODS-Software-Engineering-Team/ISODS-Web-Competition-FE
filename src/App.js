import SignIn from "./Components/Auth/SignIn";
import './App.css';
import * as React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
