import React from "react";
import { GoSignOut } from "react-icons/go";
type Props = {};

function ProfileBar({}: Props) {
  return (
    <div className=" flex justify-between	items-center p-5 border-r-2	h-full ">
      <div className="profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full "
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile pic"
        />
        <div className="username">ismylsmylv</div>
      </div>
      <button>
        <GoSignOut />
      </button>
    </div>
  );
}

export default ProfileBar;
