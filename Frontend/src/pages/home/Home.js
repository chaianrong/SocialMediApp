import Sidebar from "../../components/sidebar/Sidebar";
import Topber from "../../components/topber/Topber";
import Feed from "../../components/feed/Feed";
import Rightber from "../../components/rightbar/Rightbar";
import './home.css'

export default function home() {
  return (
    <>
      <Topber />
      <div className="homComtainer">
        <Sidebar />
        <Feed />
        <Rightber />
      </div>
    </>
  );
}
