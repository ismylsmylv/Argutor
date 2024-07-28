import React from "react";
import { IoIosSearch } from "react-icons/io";
type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="p-5 flex justify-left items-center gap-2">
      <IoIosSearch fill="gray" />
      <input
        type="text"
        placeholder="Search a user"
        className="w-full outline-transparent"
      />
    </div>
  );
}

export default SearchBar;
