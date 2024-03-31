import "./index.css";

const AnsweredPoll = ({
  optionSelectedByUser,
  poll,
  percentageOptionOne,
  optionOneVotes,
  percentageOptionTwo,
  optionTwoVotes,
  handleBack,
}) => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className={ "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + 
          (optionSelectedByUser === "optionOne" ? "chosen" : "")} >
            <p className="font-bold mb-2">{poll?.optionOne.text}</p>
            {poll && (
              <p className="text-xs">
                {optionOneVotes} votes for this option! {percentageOptionOne}% of
                the votes!
              </p>
            )}
          </div>
          <div className={ "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + 
          (optionSelectedByUser === "optionTwo" ? "chosen" : "")} >
            <p className="font-bold mb-2">{poll?.optionTwo.text}</p>
            {poll && (
              <p className="text-xs">
                {optionTwoVotes} votes for this option! {percentageOptionTwo}% of
                the votes!
              </p>

            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={handleBack} className="mt-3 btn btn-primary">
            Go Back to Home
          </button>
        </div>

      </div>

    </>
  );
};

export default AnsweredPoll;
