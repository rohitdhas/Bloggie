import { Bar } from "../Styles/sidebarStyles";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Media/blog_icon.png";
import { logout } from "../Helper/userAuth";
import { toggleSearchBar } from "./searchBar";
import toggleListItem from "../Helper/sidebarHandler";

export default function SideBar() {
  const [userData, setUserData] = useState({});
  const unwantedPaths = ["/login", "/register"];
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080/getUser", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (!data) return;
        else setUserData(data);
      });
  }, [location.pathname]);

  if (!unwantedPaths.includes(location.pathname)) {
    return (
      <Bar>
        <Link to="/">
          <li>
            <img src={logo} alt="logo" id="site_logo" />
          </li>
        </Link>
        {Object.keys(userData).length === 0 ? (
          <Link to="/login">
            <li>
              <i className="fas fa-sign-in-alt"></i>
              <span>Login/Signup</span>
            </li>
          </Link>
        ) : (
          <Link to={`/profile/${userData.username}`}>
            <li onClick={(e) => toggleListItem(e)} className="profile_options">
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
          <li onClick={toggleSearchBar}>
            <i className="fas fa-search"></i>
            <span>Search</span>
          </li>
        </Link>
        <Link to="/">
          <li className="active" onClick={(e) => toggleListItem(e)}>
            <i className="fas fa-file-alt"></i>
            <span>My Feed</span>
          </li>
        </Link>
        <Link to="#">
          <li>
            <i className="fas fa-pen"></i>
            <span>New Blog</span>
          </li>
        </Link>
        <Link to="/drafts">
          <li onClick={(e) => toggleListItem(e)}>
            <i className="fas fa-pencil-ruler"></i>
            <span>Drafts</span>
          </li>
        </Link>
        <Link to="/bookmarks">
          <li onClick={(e) => toggleListItem(e)}>
            <i className="far fa-bookmark"></i>
            <span>Bookmarks</span>
          </li>
        </Link>
        {Object.keys(userData).length === 0 ? (
          <></>
        ) : (
          <Link to="#">
            <li onClick={() => logout(setUserData)}>
              <i className="fas fa-arrow-circle-left"></i>
              <span>Logout</span>
            </li>
          </Link>
        )}
      </Bar>
    );
  } else return <></>;
}