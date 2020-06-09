import React from "react";
//import LoadingIndicator from "../../components/LoadingIndicator";
import UserListView from "./UserListView";
import "./UserListView.css";

const UsersListLayout = ({ props }) => {
  return (
    <ul className="users-list__container">
      {
        props.map(user => (user.id !== "undefined" && (
          <UserListView
            key={user.id}
            userId={user.id}
            name={user.name}
            surname={user.surname}
            profilePic={user.profile_pic}
          />
        )))
      }
    </ul>
  );
}

export default UsersListLayout;

  // ) : (
        //     <div>

        //      <h2 className="site-heading">{<LoadingIndicator />}</h2>
        //     </div>
        //   )))
