import Spline from "@splinetool/react-spline";
import "./WelcomeRobo.css";

export default function WelcomeRobo() {
    const Signup = () => {
        window.location.href = "/signup";
    };
  return (
    <div className="container">
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="signup-button" onClick={Signup}>Signup</button>
      </div>
      <div className="header">
        <h1>Welcome to VasuX.ai</h1>
      </div>
      <Spline scene="https://prod.spline.design/g58BlnX4WM8QEwbT/scene.splinecode" />
    </div>
  );
}
