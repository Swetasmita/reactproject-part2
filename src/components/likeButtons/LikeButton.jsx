import React, { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./Icon";
import "./like.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleLikeUnlike = async() => {
    try {
      //loading true
      setIsPending(true);
      const response = await fetch("https://www.greatfrontend.com/api/questions/like-button",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          action: liked ? 'unlike' :'like'
        })
      });
      //if response gets error
      if(!response.ok){
        return; //dont update the state, return
      }
        // Toggle the liked state
      setLiked(!liked); //if liked false, !liked becomes true and vice verse
    } 
   finally {
    //loading false
      setIsPending(false);
    }
  };
  return (
    /* {`like-btn ${liked && 'like-btn-active'}`} */
    <div className="like-container">
      <button className={`like-btn ${liked && 'like-btn-active'}`} onClick={handleLikeUnlike}>
        { isPending ? <SpinnerIcon /> : <HeartIcon />}
        { liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};

export default LikeButton;
