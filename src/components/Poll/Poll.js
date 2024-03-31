import "./index.css";
import { Link } from "react-router-dom";

const Poll = ({ id, user, date, avatarURL }) => {
  return (
    <Link to={`/question/${id}`}>
        <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-sky-200 max-w-sm mx-auto flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src={avatarURL} alt="Author" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              {user}
            </div>
            <p className="text-xs italic">
              {date}
            </p>
            <p className="underline underline-offset-4">Show</p>
          </div>
      </div>

    </Link>
  );
};

export default Poll;
