import React, { useState,useCallback } from "react";
import {  useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const[value,setvalue]=useState();
    const handlejoin = useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value]);
    return(
        <div className="">
            <input type="text" placeholder="enter room code" value={value} onChange={(e)=>setvalue(e.target.value)} />
            <button onClick={handlejoin}>Join</button>
        </div>
    );
}

export default Home;
