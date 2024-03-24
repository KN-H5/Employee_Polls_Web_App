import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../../actions/authedUser";

const Nav = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="flex justify-center space-x-4">
      <Link
        to="/"
        className="font-medium px-3 py-2  text-sky-700 rounded-lg hover:bg-sky-400 hover:text-white"
      >
        Home
      </Link>
      <Link
        to="/leaderboard"
        className="font-medium px-3 py-2  text-sky-700 rounded-lg hover:bg-sky-400 hover:text-white"
      >
        Leaderboard
      </Link>
      <Link
        to="/new"
        className="font-medium px-3 py-2  text-sky-700 rounded-lg hover:bg-sky-400 hover:text-white"
      >
        New Poll
      </Link>
      <span
        className="font-medium px-3 py-2  text-sky-700"
        data-testid="user-information"
      >
        Login User: {authedUserId}
      </span>
      <button
        onClick={logout}
        className="font-medium px-3 py-2  text-sky-700 rounded-lg hover:bg-sky-400 hover:text-white"
      >
        Logout
      </button>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
