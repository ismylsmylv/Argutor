import React from "react";
import { IoIosSearch } from "react-icons/io";
type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="m-5 mb-1  bg-zinc-100	rounded-full">
      <div className="p-2 flex justify-left items-center gap-2">
        <IoIosSearch fill="gray" className="ml-3" size={20} />
        <input
          type="text"
          placeholder="Search a user"
          className="w-full outline-none bg-zinc-100 px-2 py-1	"
        />
      </div>
    </div>
  );
}

export default SearchBar;
