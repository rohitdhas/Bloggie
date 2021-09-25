import { Nav } from "../Styles/mobileNavStyles";
import { useLocation } from "react-router";

export default function MobileNav() {
  const unwantedPaths = ["/login", "/register"];
  const location = useLocation();

  if (unwantedPaths.includes(location.pathname)) return <></>;
  else
    return (
      <Nav>
        <a href="/">
          <h2>Bloggie</h2>
        </a>
        <i className="fas fa-bars" onClick={openSidebar}></i>
      </Nav>
    );
}

export function openSidebar() {
  const sidebar = document.getElementById("mobile_sidebar");
  sidebar.classList.add("active");
}

export function closeSidebar() {
  const sidebar = document.getElementById("mobile_sidebar");
  sidebar.classList.remove("active");
}
