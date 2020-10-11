import { authService } from "fBase";
import React, { Profiler } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Profile = () => {
  let history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
