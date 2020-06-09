import React from "react";

const ProfileUI = ({ name, surname, profile_pic: profilePic }) => (
  <div>
    <div className="profile-view__background">
      <img src={profilePic} className="profile-view__image" />
      <h2 className="profile-view__title">
        {name} {surname}
      </h2>
    </div>
  </div>
);

ProfileUI.defaultProps = {
  name: "john",
  surname: "doe",
  profile_pic: "https://images.wisegeek.com/beethoven.jpg"
};

export default ProfileUI;
