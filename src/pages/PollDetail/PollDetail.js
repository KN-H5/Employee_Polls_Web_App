import AnswerPoll from "components/AnswerPoll/AnswerPoll";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "pages/NotFound/NotFound";
import { recordPollAnswer } from "stores/reducers/polls";
import { updateQuestionsAnswered } from "stores/reducers/users";
import "./index.css";
import Header from "components/Header/Header";
import AnsweredPoll from "components/AnsweredPoll/AnsweredPoll";
import { useState, useEffect } from "react";

const PollDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const polls = useSelector((state) => state.polls.value);
  const users = useSelector((state) => state.users.value);

  const poll = polls[id] ? polls[id] : undefined;

  const authUser = useSelector((state) => state.authUser.value);
  const dispatch = useDispatch();
  const [answered, setAnswered] = useState(false);
  const optionOneVotes = poll?.optionOne.votes.length;
  const optionTwoVotes = poll?.optionTwo.votes.length;
  const votesTotal = optionOneVotes + optionTwoVotes;

  const user = useSelector((state) => state.users.value);
  const optionSelectedByUser = user[authUser].answers[id];

  const authedUserAnswers = user[authUser].answers;

  useEffect(() => {
    const loggedInAnswer = Object.keys(authedUserAnswers)
      .filter((answer) => {
        return answer === id;
      })
      .map((answer) => {
        return authedUserAnswers[answer];
      });
    if (loggedInAnswer.length > 0) {
      setAnswered(true);
    }
  }, [authUser, authedUserAnswers, id]);

  const handlePollVote = (event) => {
    const answer = event.currentTarget.id;
    const payload = { authedUser: authUser, qid: id, answer };
    dispatch(recordPollAnswer(payload));
    dispatch(updateQuestionsAnswered(payload));
  };

  const handleBack = () => {
    navigate("/");
  };

  const calculatePercentage = (votes, total) => {
    return Math.floor((votes / total) * 100);
  };

  const percentageOptionOne = calculatePercentage(optionOneVotes, votesTotal);
  const percentageOptionTwo = calculatePercentage(optionTwoVotes, votesTotal);

  if (poll === undefined) {
    return <NotFound />;
  }

  return (
    <>
      <Header></Header>
      <h1 className="text-3xl font-bold mt-9">Poll by {poll?.author}</h1>
      <div className="poll-detail">
        <div className="flex justify-center">
        <img src={users[poll?.author].avatarURL} alt="Profile" className="h-24 w-24" />
      </div>
        {answered ? (
          <AnsweredPoll
            optionSelectedByUser={optionSelectedByUser}
            poll={poll}
            percentageOptionOne={percentageOptionOne}
            optionOneVotes={optionOneVotes}
            percentageOptionTwo={percentageOptionTwo}
            optionTwoVotes={optionTwoVotes}
            handleBack={handleBack}
          ></AnsweredPoll>
        ) : (
          <AnswerPoll poll={poll} handlePollVote={handlePollVote}  handleBack={handleBack}></AnswerPoll>
        )}
      </div>
    </>
  );
};

export default PollDetail;
