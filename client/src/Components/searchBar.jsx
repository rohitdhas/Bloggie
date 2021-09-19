import { Overlay, Bar } from "../Styles/searchBarStyles";
import { useRef } from "react";
import { removeActiveClass } from "../Helper/toggler";

export default function SearchBar() {
  const userInput = useRef("");

  return (
    <>
      <Overlay
        className="searchbar_overlay"
        onClick={() => removeActiveClass(["searchbar_overlay", "searchbar"])}
      />
      <Bar className="searchbar">
        <div>
          <input type="text" placeholder="Search" ref={userInput} />
        </div>
      </Bar>
    </>
  );
}
