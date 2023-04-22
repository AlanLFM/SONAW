import "./home.css"
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">      
        <Sidebar />
        <div className="homefeed">
          <Feed />
        </div>
      </div>
    </>
  )
}
