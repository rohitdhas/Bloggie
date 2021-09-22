import { startLoader, stopLoader } from "../Components/loader";
import { setProfileData } from '../Redux/profile';

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