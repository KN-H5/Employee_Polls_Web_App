import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "components/Header/Header";
import PollGroup from "components/PollGroup/PollGroup";
import "./index.css";

const Dashboard = () => {
  const authUser = useSelector((state) => state.authUser.value);
  const users = useSelector((state) => state.users.value);
  const polls = useSelector((state) => state.polls.value);
  const [isToggle1, setIsToggle1] = useState(true);
  const [isToggle2, setIsToggle2] = useState(false);

  const toggleChange1 = () => {
    setIsToggle1(true);
    setIsToggle2(false);
  };
  const toggleChange2 = () => {
    setIsToggle1(false);
    setIsToggle2(true);
  };


  const pollsArray = Object.keys(polls)
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const answeredPolls = pollsArray.filter(
    (poll) =>
      poll.optionOne.votes.includes(authUser) ||
      poll.optionTwo.votes.includes(authUser)
  );

  const unansweredPolls = pollsArray.filter(
    (poll) =>
      !poll.optionOne.votes.includes(authUser) &&
      !poll.optionTwo.votes.includes(authUser)
  );

  return (
    <>
      <Header index={1}></Header>
      <h1 className="text-3xl font-bold mt-9" data-testid="heading">
        Dashboard
      </h1>
      <div className="mt-3 nav-bar-left ">
        <div
          className={`nav-bar-item ${isToggle1 && "nav-bar-item-active"}`}
          onClick={toggleChange1}
          data-testid="unansweredTab"
        >
          New Questions
        </div>
        <div
          className={`nav-bar-item ${isToggle2 && "nav-bar-item-active"}`}
          onClick={toggleChange2}
          data-testid="answeredTab"
        >
          Done
        </div>
      </div>

      {isToggle1 ? (
        <PollGroup
          key="new"
          label={"New Questions"}
          questions={unansweredPolls}
          users={users}
          data-testid="unansweredPolls"
        ></PollGroup>
      ) : (
        <PollGroup
          key="answered"
          label={"Done"}
          questions={answeredPolls}
          users={users}
          data-testid="answeredPolls"
        ></PollGroup>
      )}
    </>
  );
};

export default Dashboard;
