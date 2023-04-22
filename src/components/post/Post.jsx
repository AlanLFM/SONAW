import "./post.css"
import {MoreVert, Favorite, BookmarkBorderOutlined} from "@mui/icons-material"
import { useState, useEffect } from "react"
import axios from "axios"
import { IP } from "../../IP"
export default function Post({post}) {
    const [like, setLike]=useState(post.like)
    const [isLiked, setIsLiked]=useState(false)
    const [username,setUsername]= useState()
    const id=post.userId
    console.log(id);
    useEffect(()=>{
    const fetchUser = async ()=>{
        try {
          const res=await axios.get(`http://${IP}:9000/api/users?userId=${id}`)
          setUsername(res.data.username);
        } catch (error) {
            console.log("ERRO" +error);
        }
        };
    fetchUser();
})

    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    
    //const [saves, setSaves]=useState(user.saves)
    //const [isSave, setIsSaved]=useState(false)

    /*
    const saveHandler= ()=>{
        setSaves(isSave ? like-1 : like+1)
        setIsSaved(!isLiked)
    }
    */
    
    const likeHandler= ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }


    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    {/* <img className="postProfileImg"
                    src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
                    alt='' /> */}
                    <div>
                        <span className='postUsername'>
                            {username}
                        </span>
                        <span className="postDate">{post.date}</span>
                        <p className="postAsunto">{post?.asunto}</p>
                    </div>
                </div>
                <div className="postTopRight">
                    <MoreVert className="postTopRightIcon" sx={{ fontSize:50 }} htmlColor="#ffff"/>
                </div>
            </div>
            <div className="postCenter">
                <div className="postDescripcion">{post?.desc}</div>
                <img className='postImg' src={PF+post.photo}></img>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite sx={{ fontSize:30 }} htmlColor="#D31847" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} personas les gusta</span>
                </div>
                <div className="postBottomRight">
                    <span><BookmarkBorderOutlined sx={{ fontSize:35 }} htmlColor="#C0A8B4"/></span>              
                </div>
            </div>
        </div>
    </div>
  )
}
