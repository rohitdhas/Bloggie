import { startLoader, stopLoader } from "../Components/loader";
import { remove } from "./userProfileHandler";

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

export function removeBookmark(e, id, setState) {
  const icon = e.target;

  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
  }
  remove('bookmark', id, setState)
}

