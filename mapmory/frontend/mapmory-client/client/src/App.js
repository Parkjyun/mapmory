import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/diary/posts/Posts";
import Single from "./pages/diary/single/Single";
import Signin from "./Components/Signin/Login";
import Signup from "./Components/Register/Register";
import KakaoLogin from "./Components/Signin/KakaoLogin";
// import Map from "./pages/map/Map";
import KakaoMap from "./pages/map/KakaoMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<Signin />} exact />
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/map' element={<KakaoMap />} exact />
        <Route path='/diary/posts' element={<Posts />}></Route>
        <Route path='/diary/single-post' element={<Single />}></Route>
        <Route path='/mapmory/callbackKakao' element={<KakaoLogin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
