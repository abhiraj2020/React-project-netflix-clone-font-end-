import axios from '../Axios'
import React, { useEffect, useState } from 'react'
import youtube from 'react-youtube'
import { imageUrl,apikey} from '../../Constants/Constants'
import "./RowPost.css"
function RowPost(props) {
  const[card,setCard] = useState([])
  const[urlId,seturlId] = useState('')
  useEffect(() => {
  axios.get(props.url).then((Res)=>{
    console.log(Res.data.results)        
   setCard(Res.data.results);
   
  })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
  },
};

const handleMovie=(id) =>{
//axios.get(`/movie/${id}/videos?api_key=${apikey}&language=en-US `).then((Response)=>{ console.log(Response.data.results)}
axios.get(`/movie/${id}/videos?api_key=${apikey}&language=en-US`).then((Response)=>{
  console.log(Response.data.results)
  if(Response.data.results.length!==0){
    seturlId(Response.data.results)
     }
     else{
       alert("no trailer")
     }

   })
}
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
           {card.map((value)=>{ return(<img onClick={()=>(handleMovie(value.id))} className ={props.isSmall?"smallPoster":"poster"} src={`${imageUrl+value.backdrop_path}`} alt='poster'/>)})}  
        </div>
        {urlId && <youtube  opts="{opts}" videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost