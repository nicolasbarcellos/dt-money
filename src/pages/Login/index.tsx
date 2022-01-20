import { Link, NavLink } from "react-router-dom";
import * as S from "./style";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import logoImg from "../../assets/logo.svg";
import { FormEvent, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Loading } from "../../components/Loading";

export function Login() {
  const {
    error,
    isPending,
    loginWithEmailAndPassword,
    signInWithGoogleAccount,
  } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password);
  };

  return (
    <>
      <S.Header className="header">
        <div className="header-content">
          <img src={logoImg} alt="dt-money" />
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/signup"
            >
              Signup
            </NavLink>
          </nav>
        </div>
      </S.Header>

      <S.Container>
        <div className="formContainer">
          <S.Form onSubmit={handleSubmit}>
            <h3>Welcome back</h3>
            <p>Welcome back! Please enter your details.</p>
            <label className="input">
              <span>Email</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                required
                placeholder="Enter your email"
              />
            </label>
            <label className="input">
              <span>Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Enter your password"
              />
            </label>
            <S.Checkbox>
              <input type="checkbox" required />
              <span>I agree to the terms of service</span>
              <Link to="#">Forgot password</Link>
            </S.Checkbox>
            {isPending ? (
              <Loading color='#6933ff'/>
            ) : (
              <button className="btn btn-signin">Sign in</button>
            )}
            {error && <p className="error">{error}</p>}

            <button
              onClick={signInWithGoogleAccount}
              className="btn btn-google"
            >
              <FcGoogle size={30} />
              Sign in with Google
            </button>
            <div className="bottom-content">
              <span>Don't have an account?</span>
              <Link to="/signup">Sign up for free</Link>
            </div>
          </S.Form>
          <S.Picture>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="user-text">
              <p>
                "I'm using <span className="highlight">dt-money</span> to
                monitor my financial spending and I can't imagine live whithout
                it."
              </p>
              <div className="user">
                <span>Nicolas Barcellos</span>
                <div className="stars">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                </div>
              </div>
              <div className="user-company">
                <span>Front-end Developer</span>
                <div className="arrow">
                  <AiOutlineArrowLeft size={26} />
                </div>
                <div className="arrow">
                  <AiOutlineArrowRight size={26} />
                </div>
              </div>
            </div>
          </S.Picture>
        </div>
      </S.Container>
    </>
  );
}
<>
  <S.Header className="header">
    <div className="header-content">
      <img src={logoImg} alt="dt-money" />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/signup"
        >
          Signup
        </NavLink>
      </nav>
    </div>
  </S.Header>

  <S.Container>
    <div className="formContainer">
      <S.Form>
        <h3>Welcome back</h3>
        <p>Welcome back! Please enter your details.</p>
        <label className="input">
          <span>Email</span>
          <input type="email" required placeholder="Enter your email" />
        </label>
        <label className="input">
          <span>Password</span>
          <input type="password" required placeholder="Enter your password" />
        </label>
        <S.Checkbox>
          <input type="checkbox" required />
          <span>I agree to the terms of service</span>
          <Link to="#">Forgot password</Link>
        </S.Checkbox>
        <button className="btn btn-signin">Sign in</button>

        <button className="btn btn-google">
          <FcGoogle size={30} />
          Sign in with Google
        </button>
        <div className="bottom-content">
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up for free</Link>
        </div>
      </S.Form>
      <S.Picture>
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="user-text">
          <p>
            "I'm using <span className="highlight">dt-money</span> to monitor my
            financial spending and I can't imagine live whithout it."
          </p>
          <div className="user">
            <span>Nicolas Barcellos</span>
            <div className="stars">
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
          </div>
          <div className="user-company">
            <span>Front-end Developer</span>
            <div className="arrow">
              <AiOutlineArrowLeft size={26} />
            </div>
            <div className="arrow">
              <AiOutlineArrowRight size={26} />
            </div>
          </div>
        </div>
      </S.Picture>
    </div>
  </S.Container>
</>;
