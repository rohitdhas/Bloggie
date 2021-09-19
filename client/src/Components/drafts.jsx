import { useState, useEffect } from "react";
import { getAndSet } from "../Helper/blogHandler";
import { Page } from "../Styles/homeStyles";
import { remove } from "../Helper/userProfileHandler";
import { addActiveClass, removeActiveClass } from "../Helper/toggler";
import {
  DraftCard,
  Overlay,
  ConfirmationCard,
} from "../Styles/draftPageStyles";

export default function Drafts() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    getAndSet("drafts", setDrafts);
  }, []);

  return (
    <Page>
      <h2>Drafts</h2>
      {!drafts.length ? (
        <h1>Nothing to Show Here!</h1>
      ) : (
        drafts.map((draft) => {
          return <Draft setState={setDrafts} blog={draft} />;
        })
      )}
    </Page>
  );
}

export function Draft({ blog, setState }) {
  return (
    <>
      <DraftCard>
        <section>
          <div className="blog_title">
            <a href="#">{blog.title}</a>
          </div>
          <p className="snippit">
            Last edited {blog.datePosted.split(", ")[0]} - {blog.snippit}...{" "}
            <a href="#">Read more</a>{" "}
          </p>
        </section>
        <img src={blog.coverImage} alt="cover" />
        <i
          className="fas fa-trash"
          onClick={() => addActiveClass(["card_overlay", "card"])}
        ></i>
      </DraftCard>
      <ConfirmRemove id={blog._id} setState={setState} />
    </>
  );
}

const ConfirmRemove = ({ id, setState }) => {
  return (
    <>
      <Overlay
        className="card_overlay"
        onClick={() => removeActiveClass(["card_overlay", "card"])}
      />
      <ConfirmationCard className="card">
        <p>Are You Sure?</p>
        <div className="buttons">
          <button onClick={() => remove("draft", id, setState)}>Yes</button>
          <button onClick={() => removeActiveClass(["card_overlay", "card"])}>
            No
          </button>
        </div>
      </ConfirmationCard>
    </>
  );
};
