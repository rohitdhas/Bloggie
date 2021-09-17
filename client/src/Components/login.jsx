import icon from "../Media/blog_icon.png";
import { Page, LeftSection, LoginForm } from "../Styles/loginPageStyles";
import { useRef, useEffect } from "react";

export default function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const messageRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8080/getUser", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) {
          window.location = "/";
        }
      });
  }, []);

  function LocalLogin(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      messageRef.current.innerHTML = "Missing Credentials!";
      messageRef.current.classList.add("active");
      return;
    }

    fetch("http://localhost:8080/login/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ message, success }) => {
        if (success) {
          window.location = "/";
        } else {
          messageRef.current.innerHTML = message;
          messageRef.current.classList.add("active");
        }
      })
      .catch((err) => console.log(err));
  }
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
        <form className="centered" onSubmit={LocalLogin}>
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
          <button type="button">
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
