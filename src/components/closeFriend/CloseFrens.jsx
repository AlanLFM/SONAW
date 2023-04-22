import "./closeFriend.css";

export default function CloseFrens({user}) {

  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  
  return (
    <div className="closeFriendContainer">
      <div className="closeFriendsLeft">
        <li className="closeFriend">
          <img className="closeFriendImg" src={PF+user.profilePicture} alt="" />
          <span className="closeFriendName">{user.username}</span>
        </li>
      </div>
      <div className="closeFriendsRight">
        <button className="followButton">Seguido</button>
      </div>
    </div>
  );
}