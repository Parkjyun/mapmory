import React from "react";
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "./SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
  );
}
