import { useState } from "react";
import signUp from "../../images/signup.svg";
import "./LoginPage.css";

const LoginPage = ({ toggleShowLogin, handleLogin }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      style={{ display: "block" }}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        className="btn position-absolute top-0 end-0 text-white cls-btn"
        onClick={toggleShowLogin}
      >
        <i className="bi bi-x-circle-fill"></i>
      </button>
      <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
        <div className="modal-content">
          <div className="d-flex justify-content-center mb-4 text-success fw-bold">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="d-flex fw-bold">
                {" "}
                {isLogin ? "Sign In" : "Create Account"}
              </h4>
              <button className="btn" onClick={toggleForm}>
                {isLogin
                  ? "Don't have an account ? "
                  : "Already have an account ? "}
                <span className="text-primary">
                  {isLogin ? "Sing In" : "Log In"}
                </span>
              </button>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
                    {!isLogin && (
                      <div className="d-flex">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="First Name"
                          required
                        />
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    )}
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email"
                      required
                    />
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <input
                        type="password"
                        className="form-control custom-input"
                        placeholder="Password"
                      />
                      <button
                        className="btn position-absolute"
                        style={{ right: "10px" }}
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </div>
                    {!isLogin && (
                      <input
                        type="password"
                        className="form-control mb-4 custom-input"
                        placeholder="Confirm password"
                        required
                      />
                    )}
                    <button
                      onClick={() => {
                        handleLogin(true);
                        toggleShowLogin();
                      }}
                      className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center my-4"
                      data-bs-dismiss="modal"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </button>
                    <div className="d-flex flex-column gap-2">
                      <button className="border rounded btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                        <i className="bi bi-facebook"></i>
                        Sign {isLogin ? "In" : "Up"} with Facebook
                      </button>
                      <button className=" border rounded btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                        <i className="bi bi-google"></i>
                        Sign {isLogin ? "In" : "Up"} with Google
                      </button>
                    </div>
                    {isLogin && (
                      <small className="text-center">Forgot Password ?</small>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <img src={signUp} alt="atg-illustration" />
                    <small className="my-1 text-secondary">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
