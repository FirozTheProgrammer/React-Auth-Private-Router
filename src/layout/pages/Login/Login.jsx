import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../Provider/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContex);
  // console.log(logInUser);
  // use navigate for go to home page
  const navigate = useNavigate();

  // login button handle
  const handleLogin = (events) => {
    events.preventDefault();
    const email = events.target.email.value;
    const password = events.target.password.value;
    console.log(email, password);

    // firebase auth handle
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        events.target.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col space-y-5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                New Here? Please
                <Link to={"/register"}>
                  <button className="btn btn-link"> Register</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
