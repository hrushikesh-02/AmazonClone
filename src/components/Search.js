import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

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
  const [data, setData] = useState([
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Product.json", config);
        const jsonData = Object.values(response.data);
        // const objectsArray = jsonData.map((item) => ({ title: item.title }));
        const objectsArray = jsonData.map((item) => item.title);
        setData(objectsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="w-[100%] bg-white text-black flex rounded-[5px] h-12">
      <div className="flex items-center rounded">
        <select className="bg-gray-300 text-black border text-xs xl:text-sm h-[100%] rounded-[5px_0px_0px_5px]">
          {catOpts.map((category) => {
            return (
              <option className="p-3" key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex grow items-center justify-between">
        {/* <input
          className="flex grow items-center h-[100%] rounded-l text-black pl-2"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        <Autocomplete
          type="text"
          id="combo-box-demo"
          options={data}
          sx={{ border: "none", flexGrow: 1 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="bg-amazonclone-yellow flex items-center justify-center p-2  rounded-[0_5px_5px_0]">
        <MagnifyingGlassIcon className="w-6 h-6 " />
      </div>
    </div>
  );
};

export default Search;
