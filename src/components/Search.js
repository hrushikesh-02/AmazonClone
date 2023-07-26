import React from "react";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [catOpts, setCatOpts] = useState([
    "All",
    "Deals",
    "Amazon",
    "Fashion",
    "Computers",
    "Home",
    "Mobiles",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-[100%] bg-white text-black flex rounded-[5px]">
      <div className="flex items-center rounded">
        <select className="bg-gray-300 text-black border text-xs xl:text-sm h-[100%] rounded-[5px_0px_0px_5px]">
          {catOpts.map((lang) => {
            return <option className="p-3">{lang}</option>;
          })}
        </select>
      </div>
      <div className="flex grow items-center justify-between">
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-amazonclone-yellow flex items-center justify-center p-2  rounded-[0_5px_5px_0]">
        <MagnifyingGlassIcon className="w-6 h-6 " />
      </div>
    </div>
  );
};

export default Search;
