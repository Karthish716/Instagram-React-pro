import React, { useEffect, useState } from 'react'

function Stories() {

  const [Stories, setStories] = useState([]);

  useEffect(()=>{
  
      fetch('http://localhost:3002/story').
      then((data)=> data.json()).
      then((data=> setStories(data))).
      catch(err=> console.log(err))
    },[]);

  return (
    <div className="story d-flex">
      {Stories.length > 0 ? (
        Stories.map((story)=>(
          <div key={story.id} className="mx-1">
            <div className="gradient-border">
            <img src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"/>
            </div>
            <p className="text-truncate" style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
      ):(
        <p>Loding</p>)
      }
    </div>
  )
}

export default Stories