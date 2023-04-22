import "./followed.css"
import Friend from "../../components/friend/Friend";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Followed() {
  return (
    <>
      <Topbar />
      <div className="followedContainer">      
        <Sidebar />
        <div className="followed">
          <Friend />
        </div>
      </div>
    </>
  )
}
