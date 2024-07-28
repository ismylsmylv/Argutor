import React from "react";
import ChatList from "../ChatList/page";
import ProfileBar from "../ProfileBar/page";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="Navbar w-1/5">
      <ProfileBar />
      <div className="">
        <ChatList />
      </div>
    </div>
  );
}

export default Navbar;
