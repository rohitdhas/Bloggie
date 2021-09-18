import { startLoader, stopLoader } from "../Components/loader";

export function logout(setState) {
    startLoader()
    fetch("http://localhost:8080/logout", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ success }) => {
            stopLoader();
            if (success) {
                setState({});
                window.location = '/'
            }
        });
}

export function checkAuthenticated() {
    startLoader()
    fetch("http://localhost:8080/getUser", {
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

export function getAndSetUserData(setState) {
    startLoader()
    fetch("http://localhost:8080/getUser", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ data }) => {
            stopLoader();
            if (!data) return;
            else setState(data);
        });
}