"use client";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div
      className={`p-1 w-full overflow-y-scroll`}
      style={{ maxHeight: height }}
    >
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/q23");
        }}
      >
        <img
          className="size-10	object-cover	rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile pic chat"
        />
        <div className="content">
          <h1 className="capitalize">john doe</h1>
          <p className=" line-clamp-1		">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odit commodi minima expedita itaque amet architecto tempore,
            provident a pariatur?
          </p>
        </div>
        <div className="unread bg-cyan-500 rounded-full h-5 w-5 flex items-center justify-center">
          <p className="text-white">3</p>
        </div>
      </div>
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/sdaffasdf");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/asdfsaf");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/asfsafasfas");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/2432qerg");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/werhty");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/3tywerh");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
      <div
        className="px-4 py-2 hover:bg-cyan-100 chat profile  flex justify-left	items-center gap-2 cursor-pointer	"
        onClick={() => {
          router.push("/chat/123");
        }}
      >
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
