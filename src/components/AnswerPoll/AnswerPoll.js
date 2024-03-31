import "./index.css";

const AnswerPoll = ({ handlePollVote, poll, handleBack }) => {
  return (
    <div className="answer-poll">
      <div>
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition"
            onClick={handlePollVote}
            id="optionOne"
          >
            <p className="font-bold mb-2">{poll?.optionOne.text}</p>
          </button>
          <button className="p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition"
            onClick={handlePollVote}
            id="optionTwo">
            <p className="font-bold mb-2">{poll?.optionTwo.text}</p>

          </button>
        </div>
        <div className="flex justify-center">
          <button onClick={handleBack} className="mt-3 btn btn-primary">
            Go Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnswerPoll;
