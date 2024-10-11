import React from "react";
import {Routes, Route } from "react-router-dom";
import {Home, Login} from './components';

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-primary text-2xl items-center">
      <Routes>
        {/* if we write "/login" in domain part it will give "Login.jsx" page */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
