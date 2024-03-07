import Sidebar from "../../components/sidebar/Sidebar";
import Topber from "../../components/topber/Topber";
import Feed from "../../components/feed/Feed";
import Rightber from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topber />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdn.pixabay.com/photo/2017/12/23/18/57/autumn-3035779_640.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ezra King</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightber profile />
          </div>
        </div>
      </div>
    </>
  );
}
