import React from "react";
import { Link } from "react-router-dom";
import "./diaryNavBar.css";
import RoomIcon from "@mui/icons-material/Room";

export default function DiaryNavBar() {
  const user = true;
  return (
    <div className='top'>
      <div className='topLeft'>
        <ul className='topList'>
          <RoomIcon
            style={{
              fontSize: "30px",
              color: "lightgreen",
              marginRight: "8px",
            }}
          />
          <li className='topListItem'>MAPMORY</li>
        </ul>
      </div>
      <div className='topCenter'></div>
      <div className='topRight'>
        {user ? (
          <div className='topList'>
            <img
              className='topImg'
              src='https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/690/e45d63ab1112bce622cbbe90d6bbbe4d_res.jpeg'
              alt=''
            />
            <li className='topListItem logoutMessage'>{user && "LOGOUT"}</li>
          </div>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/signup'>
                Sign Up
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/signin'>
                Sign In
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
