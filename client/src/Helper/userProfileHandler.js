import { getAndSet } from "./blogHandler";
import { removeActiveClass } from "./toggler";
import { startLoader, stopLoader } from "../Components/loader";
import { setProfileData } from '../Redux/profile';

export function remove(path, id, setState) {
    fetch(`http://localhost:8080/${path}?id=${id}`, {
        credentials: 'include',
        method: "DELETE",
    })
        .then(res => res.json())
        .then(({ success }) => {
            if (success) {
                getAndSet(`${path}s`, setState);
                if (path === 'draft') {
                    removeActiveClass(["card_overlay", "card"])
                }
            }
        })
}

export function updateUserProfile(dispatcher) {
    startLoader();
    fetch(`http://localhost:8080/userdata`, {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ data }) => {
            stopLoader();
            if (data) {
                dispatcher(setProfileData(data));
            }
        });
}