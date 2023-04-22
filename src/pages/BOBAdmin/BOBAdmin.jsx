import "./bobAdmin.css"
import Topbar from "../../components/topbar/Topbar";
import SidebarAdmin from "../../components/sidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../components/topbarAdmin/TopbarAdmin";

export default function Saved() {
  return (
    <>
      <TopbarAdmin />
      <div className="bobAdminContainer">      
        <SidebarAdmin />
        <div className="bobAdmin">
            BOB Admin
        </div>
      </div>
    </>
  )
}
