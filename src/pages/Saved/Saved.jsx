import "./saved.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Saved() {
  return (
    <>
      <Topbar />
      <div className="savedContainer">      
        <Sidebar />
        <div className="saved">
            Guardados
        </div>
      </div>
    </>
  )
}
