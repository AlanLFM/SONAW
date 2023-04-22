import "./friend.css"
import CloseFriend from "../closeFriend/CloseFrens"
import {Users} from "../../dummyData"

export default function Feed() {
  return (
    <div className="friend">
        <div className="friendWrapper">
            <ul className="friendList">
            {Users.map((u) => (
                <CloseFriend key={u.id} user={u} />
            ))}
            </ul>
        </div>
    </div>
  )
}


