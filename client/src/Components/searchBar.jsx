import { Overlay, Bar } from "../Styles/searchBarStyles";
import { useRef } from "react";

export default function SearchBar() {
  const userInput = useRef("");

  return (
    <>
      <Overlay className="searchbar_overlay" onClick={toggleSearchBar} />
      <Bar id="searchbar">
        <div>
          <input type="text" placeholder="Search" ref={userInput} />
        </div>
      </Bar>
    </>
  );
}

export function toggleSearchBar() {
  const overlay = document.querySelector(".searchbar_overlay");
  const searchBar = document.getElementById("searchbar");

  overlay.classList.toggle("active");
  searchBar.classList.toggle("active");
}
