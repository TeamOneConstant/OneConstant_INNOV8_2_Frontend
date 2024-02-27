import React from 'react';
import FollowingComp from './FollowingComp';
import team from "../assets/team.png"

function Card() {
 
  return (
   <>
   <div className='w-[400px] h-[300px] bg-slate-900 rounded-md overflow-hidden m-4'>
    <img src={team} alt=""  className='w-full h-[70%] my-2 rounded-lg' />
    <FollowingComp heading="Welcome to the most enhancing cricket experience" subheading="CricketLive:2.4k watching" />
   </div>
   </>
  );
}

export default Card;