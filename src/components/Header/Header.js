import "./index.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "stores/reducers/auth";
import { useDispatch } from "react-redux";

const Header = ({ index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setActiveTab(index);
  }, [index]);

  const handleTabClick = (event, tabIndex) => {
    event.preventDefault();
    setActiveTab(tabIndex);
    switch (tabIndex) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/leaderboard");
        break;
      case 3:
        navigate("/new-poll");
        break;
      case 4:
        navigate("/"); // Always navigate to home page
        dispatch(logout());
        navigate(window.location.pathname); // Refresh the current route
        break;

      default:
        break;
    }
  };

  const navBarItem = (label, tabIndex, testId, url) => {
    return (
      <a
        className={`nav-bar-item font-medium text-sky-700  hover:bg-sky-400 hover:text-white ${
          activeTab === tabIndex ? "nav-bar-item-active" : ""
        }`}
        onClick={(event) => handleTabClick(event, tabIndex)}
        data-testid={testId}
        href={url}
      >
        {label}
      </a>
    );
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-left ">
        {navBarItem("Home", 1, "home", "/")}
        {navBarItem("Leaderboard", 2, "leaderboard", "leaderboard")}
        {navBarItem("New poll", 3, "newPoll", "new-poll")}
      </div>
      <div className="nav-bar-item-center"></div>
      <div className="nav-bar-right">
        <div className="nav-bar-item nav-bar-item-user">
          {authUser ? authUser : "User"}
        </div>
        {navBarItem("Logout", 4, "logout", "logout")}
      </div>
    </div>
  );
};

export default Header;
