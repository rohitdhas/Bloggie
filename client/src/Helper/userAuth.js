import { startLoader, stopLoader } from "../Components/loader";
import { setProfileData } from '../Redux/profile';

export function login(e, usernameRef, passwordRef, messageRef) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
        messageRef.current.innerHTML = "Missing Credentials!";
        messageRef.current.classList.add("active");
        return;
    }

    startLoader();
    fetch('http://localhost:8080/login/local', {
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
            stopLoader();
            if (success) {
                window.location = "/";
            } else {
                messageRef.current.innerHTML = message;
                messageRef.current.classList.add("active");
            }
        })
        .catch((err) => console.log(err));
}

export function logout(dispatcher) {
    startLoader()
    fetch("http://localhost:8080/logout", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ success }) => {
            stopLoader();
            if (success) {
                dispatcher(setProfileData({
                    name: "",
                    username: "",
                    email: "",
                    profileImage: ""
                }))
                window.location = '/'
            }
        });
}

export function checkAuthenticated() {
    startLoader()
    fetch("http://localhost:8080/userdata", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ success }) => {
            stopLoader();
            if (success) {
                window.location = "/";
            }
        });
}

export function createAccount(e, refs) {
    e.preventDefault();
    const { passwordRef, retypePasswordRef, messageRef, usernameRef, emailRef, fullNameRef } = refs;

    const password = passwordRef.current.value;
    const retypePassword = retypePasswordRef.current.value;

    if (password !== retypePassword) {
        messageRef.current.innerHTML = "Passwords Don't Match!";
        messageRef.current.classList.add("active");
        return;
    }

    startLoader();
    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: fullNameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
        }),
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ message, success }) => {
            stopLoader();
            if (success) {
                window.location = "/login";
            }
            messageRef.current.innerHTML = message;
            messageRef.current.classList.add("active");
        });
}
