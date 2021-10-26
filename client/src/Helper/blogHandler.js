import { startLoader, stopLoader } from "../Components/loader";
import { notify } from "../Redux/profile";
import { toggleIcons } from "./toggler";

export function getAndSet(path, setState) {
  startLoader();
  fetch(`http://localhost:8080/${path}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then(({ data }) => {
      stopLoader();
      if (data) {
        setState(data);
      }
    });
}

export function toggleLikesOrBookmarks(e, type, id, dispatcher) {
  toggleIcons(e);

  fetch(`http://localhost:8080/blog-${type}?id=${id}`, {
    credentials: 'include',
    method: 'PUT'
  }).then(res => res.json())
    .then(({ success, message }) => {
      if (!success) {
        dispatcher(notify({ message, success }))
      }
    })
}