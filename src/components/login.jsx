import { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  ClipboardList,
  ChartNoAxesCombined,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

import "./login.css";
import renoFlowLogo from "../assets/RenoFlowLogo.png";
import houseImage from "../assets/loginHouse.png";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Authentication will be connected later.
  }

  return (
    <div className="login-wrapper">
      <main className="login-page">
        <section className="login-wallpaper">
          <div className="logo-container">
            <img className="logo" src={renoFlowLogo} alt="RenoFlow" />

            <div className="login-intro">
              <h1>Your renovation projects, all in one place.</h1>

              <div className="paragraph-container">
                <p>
                  Plan, organise, track and manage your property renovations
                  with ease.
                </p>
              </div>
            </div>

            <div className="login-features">
              <div className="login-feature">
                <div className="feature-icon">
                  <House size={23} />
                </div>
                <div>
                  <h3>Organise your property</h3>
                  <p>Add your rooms, floors and outdoor areas.</p>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">
                  <ClipboardList size={23} />
                </div>
                <div>
                  <h3>Plan and track work</h3>
                  <p>Manage tasks, materials and costs.</p>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">
                  <ChartNoAxesCombined size={23} />
                </div>
                <div>
                  <h3>Keep everything in one place</h3>
                  <p>From planning to completion.</p>
                </div>
              </div>
            </div>

            <img
              className="login-house-image"
              src={houseImage}
              alt="Illustration of a renovated home"
            />
          </div>
        </section>

        <section className="login-content">
          <div className="login-form-container">
            <div className="login-form-header">
              <h2>Welcome back</h2>
              <p>Sign in to your RenoFlow account.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <div className="input-container">
                  <Mail size={19} />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="input-container">
                  <LockKeyhole size={19} />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a href="#forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="sign-in-btn">
                Sign In
              </button>
            </form>

            <div className="login-divider">
              <span>or</span>
            </div>

            <button type="button" className="google-sign-in">
              <span className="google-logo">G</span>
              Sign in with Google
            </button>

            <p className="register-text">
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
