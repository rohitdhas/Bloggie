import { Overlay, Bar, SearchResults } from "../Styles/searchBarStyles";
import { removeActiveClass } from "../Helper/toggler";
import { useState, useEffect } from "react";
import { searchFor } from "../Helper/searchHandler";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!userInput) {
      setSearchResults([]);
      return;
    } else searchFor(userInput, setSearchResults);
  }, [userInput]);

  return (
    <>
      <Overlay
        className="searchbar_overlay"
        onClick={() => removeActiveClass(["searchbar_overlay", "searchbar"])}
      />
      <Bar className="searchbar">
        <div>
          <input
            type="text"
            placeholder="Search Blogs"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </div>
        <SearchResults>
          {!searchResults.length
            ? null
            : searchResults.map((result) => {
                return (
                  <a href={`/blog/${result._id}`}>
                    <li
                      onClick={() =>
                        removeActiveClass(["searchbar_overlay", "searchbar"])
                      }
                      key={result._id}
                    >
                      {result.title}
                    </li>
                  </a>
                );
              })}
        </SearchResults>
      </Bar>
    </>
  );
}
