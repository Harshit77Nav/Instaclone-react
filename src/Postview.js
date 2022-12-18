import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineCamera } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import './Post.css';


function Postview() {
    const [Data , setData] = useState([]);

    useEffect( ()=>{
      fetch("https://instaclone-node.onrender.com/blog", {
        method:'GET'})
        .then((response) => response.json())
        .then((data) => setData(data));
      },[])

  return (
    <>
    <div>

        <section className={'header'}>
          <span className={'logo'}><FiInstagram/>Instaclone</span><span className={'cam'}><Link to={'/form'}><AiOutlineCamera/></Link></span>
        </section>

        {Data.map((post,index) =>{
             return( 
      <div className={'container'} key={index}>

        <section className={'posthead'}>
          <span><b>{post.author}</b><br/>{post.location}</span><span><b>...</b></span>
        </section>

        <section>
          <img src={post.image} alt="" ></img>
        </section>

        <section className={'likes'}>
        <span><AiOutlineHeart size={'1.5rem'}/> <TbBrandTelegram size={'1.5rem'}/></span><span>{post.date}</span>
        </section>

        <section className={'caption'}>
          <div>
            <span>{post.likes}Likes</span>
          </div>
          <div><b>{post.description}</b></div>
        </section>
      </div>

     )})}
    
    </div>
    </>
             
  )
}

export default Postview;