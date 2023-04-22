import "./notifications.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Notifications() {
  return (
    <>
      <Topbar />
      <div className="notificationsContainer">      
        <Sidebar />
        <div className="notifications">
            Notificaciones
        </div>
      </div>
    </>
  )
}
