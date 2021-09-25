import { Overlay, Spinner } from "../Styles/loaderStyles";

export default function Loader() {
  return (
    <>
      <Overlay id="loader_overlay">
        <Spinner id="loader" />
      </Overlay>
    </>
  );
}

export function startLoader() {
  const overlay = document.getElementById("loader_overlay");
  const loader = document.getElementById("loader");

  overlay.classList.add("active");
  loader.classList.add("active");
}

export function stopLoader() {
  const overlay = document.getElementById("loader_overlay");
  const loader = document.getElementById("loader");

  overlay.classList.remove("active");
  loader.classList.remove("active");
}
