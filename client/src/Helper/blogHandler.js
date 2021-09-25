import { startLoader, stopLoader } from "../Components/loader";
import { notify } from "../Redux/profile";

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

export function toggleLikesOrBookmarks(type, id, setState, dispatcher) {
  fetch(`http://localhost:8080/blog-${type}?id=${id}`, {
    credentials: 'include',
    method: 'PUT'
  }).then(res => res.json())
    .then(({ success, message }) => {
      if (success) {
        if (window.location.pathname.includes('bookmarks')) {
          getAndSet('bookmarks', setState)
        }
        else {
          getAndSet(`blog?id=${id}`, setState);
        }
      } else {
        dispatcher(notify({ message, success }))
      }
    })
}