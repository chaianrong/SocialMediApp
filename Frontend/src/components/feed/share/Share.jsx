import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg"
            alt=""
          />
          <input placeholder="คุณคิดอะไรอยู่ ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="#FE9730" className="shareIcon" />
              <span className="shareOptionText">รูปและวีดีโอ</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#D4CA00  " className="shareIcon" />
              <span className="shareOptionText">ความรู้สึก</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
