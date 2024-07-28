"use client";
import { useEffect, useState } from "react";

type Props = {};
// 128
function ChatList({}: Props) {
  const [height, setheight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      setheight(Number(window.innerHeight) - 160);
    }
  }, [height]);
  return (
    <div
      className={`p-5 w-full overflow-y-scroll`}
      style={{ maxHeight: height }}
    >
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div className="chat profile  flex justify-left	items-center gap-2">
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className="max-w-fit line-clamp-1	w-full	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
