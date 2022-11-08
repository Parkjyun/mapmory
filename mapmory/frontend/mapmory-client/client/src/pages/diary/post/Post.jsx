import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <Link className='link' to='/diary/post'>
      <div className='post'>
        <img
          className='postImg'
          src='https://www.bntnews.co.kr/data/bnt/image/2022/08/12/bnt202208120083.jpg'
          alt=''
        />
        <div className='postInfo'>
          <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
          </div>
          <span className='postTitle'>Lorem ipsum dolor</span>
          <hr />
          <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
          corrupti perspiciatis maxime sint, itaque iste tempora magnam, animi
          quia molestias odio accusamus qui ad ipsam modi adipisci autem
          dolorem!
        </p>
      </div>
    </Link>
  );
}
