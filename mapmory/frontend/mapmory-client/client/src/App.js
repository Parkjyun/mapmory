import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Posts from "./pages/diary/posts/Posts";
import Single from "./pages/diary/single/Single";
import Signin from "./Components/Signin/Login";
import Signup from "./Components/Register/Register";
import KakaoLogin from "./Components/Signin/KakaoLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<Signin />} exact />
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/diary' element={<Posts />} exact />
        <Route path='/diary/post' element={<Single />}></Route>
        <Route path='/mapmory/callbackKakao' element={<KakaoLogin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
