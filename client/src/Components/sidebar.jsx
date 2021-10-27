import logo from "../Media/blog_icon.png";
import toggleListItem from "../Helper/sidebarHandler";
import { Bar, MobileBar } from "../Styles/sidebarStyles";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../Helper/userAuth";
import { updateUserProfile } from "../Helper/userProfileHandler";
import { addActiveClass, removeActiveClass } from "../Helper/toggler";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "./mobileNav";
import { searchFor } from "../Helper/searchHandler";

export default function SideBar() {
  const unwantedPaths = ["/login", "/register"];
  const userData = useSelector((state) => state.userProfile);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    updateUserProfile(dispatch);
    toggleListItem(userData.username);
  }, [location.pathname, dispatch, userData.username]);

  if (!unwantedPaths.includes(location.pathname)) {
    return (
      <Bar>
        <Link to="/">
          <li>
            <img src={logo} alt="logo" id="site_logo" />
          </li>
        </Link>
        {!userData.username ? (
          <Link to="/login">
            <li>
              <i className="fas fa-sign-in-alt"></i>
              <span>Login/Signup</span>
            </li>
          </Link>
        ) : (
          <Link to={`/profile/${userData.username}`}>
            <li className="profile_options profile">
              <img
                src={userData.profileImage}
                alt="profilePic"
                className="profile_pic"
              />
              <span>Your Profile</span>
            </li>
          </Link>
        )}
        <Link to="#">
          <li
            onClick={() => addActiveClass(["searchbar_overlay", "searchbar"])}
          >
            <i className="fas fa-search"></i>
            <span>Search</span>
          </li>
        </Link>
        <Link to="/">
          <li className="feed">
            <i className="fas fa-file-alt"></i>
            <span>My Feed</span>
          </li>
        </Link>
        <Link to="/editor">
          <li className="editor">
            <i className="fas fa-pen"></i>
            <span>New Blog</span>
          </li>
        </Link>
        <Link to="/drafts">
          <li className="drafts">
            <i className="fas fa-pencil-ruler"></i>
            <span>Drafts</span>
          </li>
        </Link>
        <Link to="/bookmarks">
          <li className="bookmarks">
            <i className="far fa-bookmark"></i>
            <span>Bookmarks</span>
          </li>
        </Link>
        {!userData.username ? (
          <></>
        ) : (
          <Link to="#">
            <li onClick={() => logout(dispatch)}>
              <i className="fas fa-arrow-circle-left"></i>
              <span>Logout</span>
            </li>
          </Link>
        )}
      </Bar>
    );
  } else return <></>;
}

export function MobileSidebar() {
  const userData = useSelector((state) => state.userProfile);
  const location = useLocation();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    updateUserProfile(dispatch);
    toggleListItem(userData.username);

    let liArr = document.querySelectorAll("li");
    liArr.forEach((li) => {
      if (li.querySelector("input")) {
        return;
      } else li.onclick = closeSidebar;
    });
  }, [location.pathname, dispatch, userData.username]);

  useEffect(() => {
    if (!userInput) {
      setSearchResults([]);
      return;
    }
    searchFor(userInput, setSearchResults);
  }, [userInput]);

  return (
    <MobileBar id="mobile_sidebar">
      <li className="sidebar_options">
        <Link to="/">
          <h2>Bloggie</h2>
        </Link>
        <i className="far fa-times-circle" onClick={closeSidebar}></i>
      </li>
      <li className="sidebar_search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <div className="searchResults">
          {!searchResults.length
            ? null
            : searchResults.map((result) => {
                return (
                  <a key={result._id} href={`/blog/${result._id}`}>
                    <div
                      className="search_result"
                      onClick={() =>
                        removeActiveClass(["searchbar_overlay", "searchbar"])
                      }
                      key={result._id}
                    >
                      {result.title}
                    </div>
                  </a>
                );
              })}
        </div>
      </li>
      {!userData.username ? (
        <Link to="/login">
          <li>
            <i className="fas fa-sign-in-alt"></i>
            <span>Login/Signup</span>
          </li>
        </Link>
      ) : (
        <Link to={`/profile/${userData.username}`}>
          <li className="profile_options profile">
            <i className="far fa-user"></i>
            <span>Your Profile</span>
          </li>
        </Link>
      )}
      <Link to="/">
        <li className="feed">
          <i className="fas fa-file-alt"></i>
          <span>My Feed</span>
        </li>
      </Link>
      <Link to="/editor">
        <li className="editor">
          <i className="fas fa-pen"></i>
          <span>New Blog</span>
        </li>
      </Link>
      <Link to="/drafts">
        <li className="drafts">
          <i className="fas fa-pencil-ruler"></i>
          <span>Drafts</span>
        </li>
      </Link>
      <Link to="/bookmarks">
        <li className="bookmarks">
          <i className="far fa-bookmark"></i>
          <span>Bookmarks</span>
        </li>
      </Link>
      {!userData.username ? (
        <></>
      ) : (
        <Link to="#">
          <li onClick={() => logout(dispatch)}>
            <i className="fas fa-arrow-circle-left"></i>
            <span>Logout</span>
          </li>
        </Link>
      )}
    </MobileBar>
  );
}
