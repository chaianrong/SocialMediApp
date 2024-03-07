import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "./online/Online";


export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <div>
        <div className="birthdayContainer">
          <img
            className="bithdayImg"
            src="https://cdn-icons-png.flaticon.com/128/2349/2349820.png"
            alt=""
          />
          <span className="bithdayText">
            วันนี้เป็นวันเกิดของ... และเพื่อนอีก 3 คนมีวันเกิด
          </span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">เพื่อนออนไลน์</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightber = () => {
    return (
      <>
        <h4 className="rightbarTitle">ข้อมูลผู้ใช้</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">ประเทศ:</span>
            <span className="rightbarInfoValue">ไทย</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">เมือง:</span>
            <span className="rightbarInfoValue">กรุงเทพ</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">ความสัมพันธ์:</span>
            <span className="rightbarInfoValue">โสด</span>
          </div>
        </div>
        <h4 className="rightbarTitle">เพื่อนผู้ใช้งาน</h4>
        <div className="rightbarFollowings">
          {Users.map((u) => (
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={u.profilePicture}
                alt=""
              />
              <span className="rightbarFollowingName">{u.usrename}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightber />:<HomeRightbar/>}
      </div>
    </div>
  );
}
