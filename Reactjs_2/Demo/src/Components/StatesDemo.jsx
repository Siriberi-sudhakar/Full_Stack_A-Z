import React from "react";
import { useState, useEffect } from "react";

function StatesDemo(){

    const [videoName] = useState("React Js Tutorial");
    const [videoLikes, setVideoLikes] = useState(95);
    const [comments, setComments] = useState("");

    useEffect(() => {
        console.log("Component Rendered");
    },[]);

    useEffect(() => {
        console.log("Video Likes Updated :", videoLikes);
    }, [videoLikes])


    return(
        <>
            <h1>States Demo</h1>
            <h4>Video Name : {videoName}</h4>
            <h4>Likes : {videoLikes}</h4>
            <button onClick={() => setVideoLikes(videoLikes + 1)}>like video</button>
            <button onClick={() => setVideoLikes(videoLikes - 1)}>DisLike video</button>

            {
                videoLikes>=100 && <h2>Congrats! Video has reached 100 likes (this is conditional rendering)</h2>
            }
            {
                videoLikes<100? <h2>Keep going to reach 100 likes</h2> : null
            }

            <form action="">
                <label htmlFor="videoComment">comments : </label>
                <input type="text" name="videoComment" placeholder="Enter comment" value={comments} 
                onChange={(e)=>{
                    console.log(e);
                    console.log(e.target.value);
                    setComments(e.target.value)}}/>

            </form>
            <childComponent/>
        </>
    )
}


// function childComponent(){
//     return (
//         <>
//             <h2>This is child component</h2>
//         </>
//     )
// }
export default StatesDemo;