import "./topber.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export default function Topber() {
  return (
    <div className="topberconponents">
      <div className="topberLeft">
        <span className="logo">Social Media</span>
      </div>
      <div className="topberCenter">
        <div className="searchber">
          <SearchIcon className="searvhIcon" />
          <input
            placeholder="ค้นหาเพื่อน โพสต์ หรือวิดีโอ"
            className="searchImport"
          ></input>
        </div>
      </div>

      <div className="topberRight">
        <div className="topberLinks">
          <span className="topberLinks">Homepage</span>
          <span className="topberLinks">Timeline</span>
        </div>
        <div className="topberIcoms">
          <div className="topberIconsItme">
            <PersonIcon />
            <span className="topberIcomBadge">1</span>
          </div>
          <div className="topberIconsItme">
            <ChatIcon />
            <span className="topberIcomBadge">2</span>
          </div>
          <div className="topberIconsItme">
            <CircleNotificationsIcon />
            <span className="topberIcomBadge">3</span>
          </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg" alt="" className="topberImg" />
      </div>
    </div>
  );
}
