import { getAndSet } from "./blogHandler";
import { removeActiveClass } from "./toggler";
import { startLoader, stopLoader } from "../Components/loader";
import { notify, setProfileData } from '../Redux/profile';

export function removeDraft(id, setState, dispatcher) {
    fetch(`/api/draft?id=${id}`, {
        credentials: 'include',
        method: "DELETE",
    })
        .then(res => res.json())
        .then(({ success, message }) => {
            dispatcher(notify({ message, success }))
            if (success) {
                // Update Page
                getAndSet('drafts', setState);
                removeActiveClass(["card_overlay", "card"])
            }
        })
}

export function updateUserProfile(dispatcher) {
    startLoader();
    fetch(`/api/userdata`, {
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


export function getProfile(username, setState, dispacher) {
    startLoader();
    fetch(`/api/profile?username=${username}`, {
        credentials: 'include'
    }).then(res => res.json())
        .then(({ data, message, success }) => {
            stopLoader();
            if (success) {
                setState(data)
            } else dispacher(notify({ message, success }))
        })
}


export function removePost(id, username, setState, dispatcher) {
    fetch(`/api/blog?id=${id}`, {
        credentials: 'include',
        method: "DELETE",
    })
        .then(res => res.json())
        .then(({ message, success }) => {
            dispatcher(notify({ message, success }));
            if (success) {
                getProfile(username, setState, dispatcher);
                removeActiveClass(["card_overlay", "card"])
            }
        })
}