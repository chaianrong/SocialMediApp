import "./post.css";
import { MoreVert } from "@mui/icons-material";
import  {Users}  from "../../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const user = Users.filter(u=>u.id===post.userID)[0].usrename
  const profile = Users.filter(u=>u.id===post.userID)[0].profilePicture

  const [like,setlike]=useState(post.like);
  const [islike,setIslike]=useState(false);

  const lineHandler = ()=>{
    setlike(islike ? like-1:like+1) // เพิ่มหรือลดจำนวนของ Like โดยขึ้นอยู่กับค่า isLike
    setIslike(!islike)
  }

  return (
    <div className="post">
      <div className="postWrappor">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={profile}
              alt=""
            />
            <span className="postUsername">{user}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img
            className="postImg"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcom" src="images\like.png" onClick={lineHandler} alt="" />
            <img className="likeIcom" src="\images\heart.png" onClick={lineHandler} alt="" />
            <span className="postLikeCounter">{like} คนถูกใจสิ่งนี้</span>
          </div>
          <div className="postBottomRight" >
            <span className="postCommentText">{post.comment} ความคิดเห็น</span>
          </div>
        </div>
      </div>
    </div>
  );
}
