import { Bar } from "../Styles/sidebarStyles";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Media/blog_icon.png";
import { logout } from "../Helper/userAuth";
import { updateUserProfile } from "../Helper/userProfileHandler";
import toggleListItem from "../Helper/sidebarHandler";
import { addActiveClass } from "../Helper/toggler";
import { useSelector, useDispatch } from "react-redux";

export default function SideBar() {
  const unwantedPaths = ["/login", "/register"];
  const userData = useSelector((state) => state.userProfile);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    toggleListItem();
    updateUserProfile(dispatch);
  }, [location.pathname]);

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
