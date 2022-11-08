import React from "react";
import Post from "../post/Post";
import Sidebar from "../sidebar/Sidebar";
import "./post.css";

export default function Posts() {
  return (
    <div className='home' style={{ display: "flex" }}>
      <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Sidebar />
    </div>
  );
}
