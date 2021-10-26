import { useRef, useEffect } from "react";
import icon from "../Media/blog_icon.png";
import { LeftSection, Page } from "../Styles/loginPageStyles";
import { RegisterForm } from "../Styles/registerPageStyles";
import { checkAuthenticated } from "../Helper/userAuth";
import { createAccount } from "../Helper/userAuth";

export default function Register() {
  const messageRef = useRef("");
  const fullNameRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const retypePasswordRef = useRef("");

  const refs = {
    messageRef,
    fullNameRef,
    usernameRef,
    emailRef,
    passwordRef,
    retypePasswordRef,
  };

  useEffect(() => {
    checkAuthenticated();
    document.title = "Create an Account";
  }, []);

  return (
    <Page>
      <LeftSection className="split left">
        <div className="centered">
          <img src={icon} alt="icon" />
          <p className="site_title">Bloggie</p>
          <p className="site_description">
            Share your Knowladge and Ideas to the world!
          </p>
        </div>
      </LeftSection>
      <RegisterForm className="split right">
        <form className="centered" onSubmit={(e) => createAccount(e, refs)}>
          <p>Create An Account</p>
          <div id="message_card" ref={messageRef}></div>
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              ref={fullNameRef}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              ref={usernameRef}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Retype Password"
              ref={retypePasswordRef}
              required
            />
          </div>
          <button type="submit">Create Account</button>
          <p>
            <a href="/login">Click Here</a> to Login
          </p>
        </form>
      </RegisterForm>
    </Page>
  );
}
