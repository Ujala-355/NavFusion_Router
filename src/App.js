import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/home";
import About from "./About/about";
import Contact from "./Contact/contact";
import Login from "./login/Login";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;