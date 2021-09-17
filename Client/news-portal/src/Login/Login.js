import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "react-google-login";
import { Link, useHistory } from "react-router-dom";

function Login({ setAuthorize }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const clientId =
    "906270629173-gdn6b5use8bsg7ln4mio4r08ehng4t5m.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setAuthorize(true);
    history.push("/home");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      setAuthorize(true);
      window.alert("success");
      history.push("/home");
    }
  };

  return (
    <>
      <div className="container-fluid login">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 d-flex justify-content-center">
              <i class="fa fa-key fa-3x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12 d-flex justify-content-center">
              <h3 className="text-white">Sign IN</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <form method="POST">
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    class="form-control text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label class="form-label text-white">Email address</label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label class="form-label text-white">Password</label>
                </div>

                <div class="row">
                  <div class="col-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label class="remember form-check-label text-white">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <a href="#!" className="text-white">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-white btn-block mb-4"
                  onClick={loginUser}
                >
                  Sign in
                </button>

                <div class="text-center">
                  <p className="text-white">
                    Not a member?{" "}
                    <a href="#!" className="text-white">
                      <Link to="/register">Register</Link>
                    </a>
                  </p>
                  <h4 className="text-white">or</h4>
                  <div className="row">
                    <div class="col-md-12">
                      {" "}
                      <GoogleLogin
                        clientId={clientId}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={false}
                      >
                        Signup Using Google
                      </GoogleLogin>{" "}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
