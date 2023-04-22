import "./bob.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Saved() {
  return (
    <>
      <Topbar />
      <div className="bobContainer">      
        <Sidebar />
        <div className="bob">
            BOB
        </div>
      </div>
    </>
  )
}
