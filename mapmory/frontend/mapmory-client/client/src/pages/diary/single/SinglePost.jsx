import React from "react";
import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://img.hankyung.com/photo/202208/03.30909476.1-1200x.jpg'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon fas fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Autor : <b>Chan uk</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sed quia
          tempore, repellat rem dignissimos voluptas sint sapiente mollitia et,
          eum quasi ad animi quibusdam. Excepturi facere repellendus dolorum
          laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cum sed quia tempore, repellat rem dignissimos voluptas sint sapiente
          mollitia et, eum quasi ad animi quibusdam. Excepturi facere
          repellendus dolorum laboriosam?
        </p>
      </div>
    </div>
  );
}
