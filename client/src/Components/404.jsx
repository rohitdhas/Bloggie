import { Page } from "../Styles/404PageStyles";
import { useEffect } from "react";

export default function PageNotFound() {
  useEffect(() => {
    document.title = "404 - Not Found!";
  }, []);

  return (
    <Page>
      <h1>404 - NOT FOUND</h1>
      <div>Page you are trying to access is not available.</div>
    </Page>
  );
}
