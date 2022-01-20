import { Link, NavLink } from "react-router-dom";
import * as S from "./style";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import logoImg from "../../assets/logo.svg";

import { useState, FormEvent } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Loading } from "../../components/Loading";


export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, signupWithEmailPassword, signInWithGoogleAccount } =
    useSignup();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signupWithEmailPassword(email, password, name);
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
            <h3>Sign up</h3>
            <p>Start your 30-day free trial.</p>
            <label className="input">
              <span>Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Create a name"
              />
            </label>
            <label className="input">
              <span>Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Create a email"
              />
            </label>
            <label className="input">
              <span>Password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                placeholder="Create a password"
              />
            </label>
            <S.Checkbox>
              <input type="checkbox" required />
              <span>I agree to the terms of service</span>
              <Link to="#">Forgot password</Link>
            </S.Checkbox>
            {isPending ? (
              <Loading color='#6933ff' />
            ) : (
              <button className="btn btn-signin">Create a account</button>
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
              <span>Already have an account?</span>
              <Link to="/login">Log in</Link>
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
