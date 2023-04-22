import "./feed.css"
import Post from "../post/Post"
import {Posts} from "../../dummyData"
import axios from "axios"
import { useEffect, useState } from "react";
import { IP } from "../../IP";
export default function Feed() {
  const [post, setPosts]=useState([]) 

  useEffect(()=>{
    const fetchPost = async ()=>{
      try {
        const res=await axios.get(`http://${IP}:9000/api/posts/all/posts`)
        setPosts(res.data);
        console.log("Consulta de posts");
      } catch (error) {
          console.log(error);
      }
    };
    fetchPost();
  }, []) 

  return (
    <div className="feed">
        <div className="feedWrapper">
          {post.map((p,key)=>(
            <Post key={key} post={p} />
          ))}
        </div>
    </div>
  )
}


