import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NewPoll from "./components/NewPoll/NewPoll";
import PollPage from "./components/PollPage/PollPage";
import { connect } from "react-redux";
import Login from "./components/Login/Login";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Error404 from "./components/404";
import PrivateRoute from "./components/PrivateRoute";

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="container mx-auto py-4">
      {loggedIn && <Nav />}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <PrivateRoute>
              <PollPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/new"
          exact
          element={
            <PrivateRoute>
              <NewPoll />
            </PrivateRoute>
          }
        />
        <Route path="/404" exact element={<Error404 />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
