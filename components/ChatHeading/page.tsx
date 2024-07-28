"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdBlock, MdDelete } from "react-icons/md";

type Props = {
  params: {
    userid: string;
  };
};

function ChatHeading({ params }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="heading p-5 pr-8 flex gap-3 justify-between items-center w-full border-b-2	">
      <div className="info flex gap-3 justify-between items-center w-full">
        <div className="content flex gap-3 justify-left items-center">
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            alt=""
            className="h-10 w-10 object-cover	rounded-full"
          />
          <div>
            <h1 className=" mb-0 uppercase font-medium">{params.userid}</h1>
            <p>online</p>
          </div>
        </div>
        <div className="actions">
          <div>
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <BsThreeDotsVertical fill="gray" size={20} />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                className="flex gap-2 justify-center items-center"
              >
                <IoMdClose />
                Close
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="flex gap-2 justify-center items-center"
              >
                <MdDelete color="red" />
                Delete
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="flex gap-2 justify-center items-center"
              >
                <MdBlock color="red" />
                Block
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeading;
