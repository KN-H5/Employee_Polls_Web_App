import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Removed useLocation
import { useDispatch, useSelector } from "react-redux";
import { login } from "stores/reducers/auth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [useName, setUseName] = useState("sarahedo");
  const [passwordValue, setPasswordValue] = useState("123");
  const [error, setError] = useState(false);

  const handleSelectChange = (event) => {
    setUseName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setError(false);
    setPasswordValue(event.target.value);
  };

  const handleSubmit = () => {
    if (
      users &&
      users[useName] &&
      passwordValue === users[useName].password
    ) {
      dispatch(login(useName));
      navigate(state?.path || "/");
    } else {
      setError(true);
      alert("Wrong password");
    }
  };
  return (

    <div className="login">
      <div className="mt-3 login-card">
        <h1 className="text-3xl font-bold mt-9" data-testid="login-heading"> Login</h1>
        <form className="login-form">
          <label  className="form-label login-label mt-3">Username</label>
          <input
          className="form-control"
            value={useName}
            onChange={handleSelectChange}
            displayEmpty
            />
          <label className=" mt-3 login-label">Password</label>
          <input
            className="form-control"
            type="password"
            autoComplete="current-password"
            InputLabelProps={{ shrink: false }}
            size="small"
            sx={{
              width: "60%",
              margin: "10px 0px",
            }}
            value={passwordValue}
            onChange={handlePasswordChange}
            error={error}
            helperText={error && "Wrong password"}
          />
          <button className="btn btn-primary login-btn mt-3" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
