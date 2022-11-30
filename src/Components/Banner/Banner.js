import axios from '../Axios'
import { apikey,imageUrl } from '../../Constants/Constants'
import React, { useEffect, useState } from 'react'
import "./Banner.css"
function Banner() {
  const[movie,setMovie] =useState('')
  useEffect(()=>{ 
      axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((Response)=>{
  
      console.log(Response.data.results[0]);
      setMovie(Response.data.results[0])
       
    })
    
     
    },[])
 
 
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.name:""}</h1>
            <div className='banner-button'>
                <button className='button'>play</button>
                <button className='button'>MyList</button>
            
            </div>
            <h1 className='disciption'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner