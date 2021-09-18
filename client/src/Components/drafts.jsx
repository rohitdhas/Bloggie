import { useState } from "react";
import { Page, BlogPost } from "../Styles/homeStyles";
import { testBlog } from "./home";

export default function Drafts() {
  const [drafts, setDrafts] = useState([testBlog]);

  return (
    <Page>
      <h1>Drafts</h1>
      {!drafts.length ? (
        <h1>Nothing to Show Here!</h1>
      ) : (
        drafts.map((draft) => {
          return (
            <BlogPost>
              <div className="blog_title">
                <a href="#">{draft.title}</a>
              </div>
              <p className="snippit">
                Last Edited {draft.datePosted} - {draft.markdown}...{" "}
                <a href="#">Read more</a>{" "}
              </p>
            </BlogPost>
          );
        })
      )}
    </Page>
  );
}
