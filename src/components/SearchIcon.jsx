import { IconContext } from "react-icons";
import React from "react";
import { BiSearch } from "react-icons/bi";
export default function SearchIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          color: "black",
          size: "40px",
        }}
      >
        <div>
          <BiSearch />
        </div>
      </IconContext.Provider>
    </>
  );
}
