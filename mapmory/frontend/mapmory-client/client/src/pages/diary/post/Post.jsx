import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://post-phinf.pstatic.net/MjAxODAzMTdfMjQg/MDAxNTIxMjIxNjQxNDY4.7yxdrHnx-bmJgerIfzMJ-Su_C4F8mFC0emU5dHwbuqgg.gjxtV-Hb48q8-Z4FV09IsM1L2FKWSmzTkSHtvPGUCmcg.JPEG/1920_1080_20140808025908818359.jpg?type=w1200'
        alt=''
      />
      <div className='postInfo'>
        <span className='postTitle'>타이틀</span>
        <hr />
        <span className='postDate'>작성 시간</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
        corrupti perspiciatis maxime sint, itaque iste tempora magnam, animi
        quia molestias odio accusamus qui ad ipsam modi adipisci autem dolorem!
      </p>
    </div>
  );
}
