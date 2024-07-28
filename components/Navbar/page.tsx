import React from "react";
import ChatList from "../ChatList/page";
import ProfileBar from "../ProfileBar/page";
import SearchBar from "../SearchBar/page";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="Navbar w-1/4  border-r-2">
      <ProfileBar />
      <SearchBar />
      <ChatList />
    </div>
  );
}

export default Navbar;
