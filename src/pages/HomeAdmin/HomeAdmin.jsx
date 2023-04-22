import "./homeAdmin.css"
import Feed from "../../components/feed/Feed";
import SidebarAdmin from "../../components/sidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../components/topbarAdmin/TopbarAdmin";

export default function Home() {
  return (
    <>
      <TopbarAdmin />
      <div className="homeContainer">      
        <SidebarAdmin />
        <div className="homefeed">
          <Feed />
        </div>
      </div>
    </>
  )
}
