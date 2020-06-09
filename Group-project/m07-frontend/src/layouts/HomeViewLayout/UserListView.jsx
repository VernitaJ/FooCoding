import React from "react";
import { Link } from "react-router-dom";
import "./UserListView.css";


const UserListView = ({ name, surname, profilePic, userId }) => {
  return (<div className="users-list__div">
    <Link className="user-list__link" to={`/${userId}`}>
      <li className="users-list__li">
        <img className="users-list__img" src={profilePic} alt={`${name}'s profile pic`} />
        <h2 className="users-list__h2">
          {name} <br />
          {surname}
        </h2>
        <img className="user-list__playbutton " src={"https://img.icons8.com/android/40/000000/play.png"} alt={"play-button"} />
      </li>
    </Link>
  </div>);
};

export default UserListView;
