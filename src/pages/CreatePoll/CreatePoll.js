import Header from "components/Header/Header";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPoll } from "stores/reducers/polls";
import { fetchUsers } from "stores/reducers/users";

const CreatePoll = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createPoll({
        optionOneText: event.target[0].value,
        optionTwoText: event.target[1].value,
        author: authUser,
      })
    );
    dispatch(fetchUsers());
    navigate("/");
  };
  return (
    <>
      <Header index={3}></Header>
      <div className="create-poll">
        <h1  className="text-3xl font-bold mt-9">Would your rather create your own poll</h1>
        <form className="create-poll-form" onSubmit={handleSubmit}>
          <div className="create-poll-item">
            <label className="form-label">First Option</label>
            <input
              className="create-poll-input"
              type="text"
              placeholder="Option One"
            ></input>
          </div>

          <div className="create-poll-item">
            <label className="form-label">Second Option</label>
            <input
              className="create-poll-input"
              placeholder="Option Two"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary create-poll-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePoll;
