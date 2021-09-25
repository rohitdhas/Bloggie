import icon from "../Media/blog_icon.png";
import { Page, LeftSection, LoginForm } from "../Styles/loginPageStyles";
import { useRef, useEffect } from "react";
import { checkAuthenticated, login } from "../Helper/userAuth";

export default function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const messageRef = useRef(null);

  useEffect(() => {
    checkAuthenticated();
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
      <LoginForm className="split right">
        <form
          className="centered"
          onSubmit={(e) =>
            login(e, "local", usernameRef, passwordRef, messageRef)
          }
        >
          <p>Login to Bloggie</p>
          <div id="message_card" ref={messageRef}></div>
          <div>
            <input type="text" placeholder="Enter Username" ref={usernameRef} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
            />
          </div>
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={(e) =>
              login(e, "google", usernameRef, passwordRef, messageRef)
            }
          >
            <i className="fab fa-google"></i>
            <span>Login with Google</span>
          </button>
          <p>
            Don't have an Account? <a href="/register">Create Here</a>
          </p>
        </form>
      </LoginForm>
    </Page>
  );
}
