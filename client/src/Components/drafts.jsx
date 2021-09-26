import { useState, useEffect } from "react";
import { getAndSet } from "../Helper/blogHandler";
import { Page } from "../Styles/homeStyles";
import { removeDraft } from "../Helper/userProfileHandler";
import { openRemoverCard, closeRemoverCard } from "../Helper/toggler";
import {
  DraftCard,
  Overlay,
  ConfirmationCard,
} from "../Styles/draftPageStyles";
import { useDispatch } from "react-redux";

export default function Drafts() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    getAndSet("drafts", setDrafts);
    document.title = "Drafts";
  }, []);

  return (
    <Page>
      <h2>Drafts</h2>
      {!drafts.length ? (
        <div className="page_status">Nothing to show here</div>
      ) : (
        drafts.map((draft) => {
          return <Draft key={draft._id} setState={setDrafts} blog={draft} />;
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
            <a href={`/editor/draft/${blog._id}`}>{blog.title}</a>
          </div>
          <p className="snippit">
            Last edited {blog.datePosted.split(", ")[0]} -{" "}
            {blog.snippit.split(" ").slice(0, 20).join(" ")}...{" "}
          </p>
        </section>
        <div className="img_container">
          <img src={blog.coverImageUrl} alt="cover" />
        </div>
        <i
          className="fas fa-trash"
          onClick={() => openRemoverCard("card_overlay", blog._id)}
        ></i>
      </DraftCard>
      <ConfirmRemove id={blog._id} setState={setState} />
    </>
  );
}

const ConfirmRemove = ({ id, setState }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Overlay className="card_overlay" />
      <ConfirmationCard className="card" id={id}>
        <p>Are You Sure?</p>
        <div className="buttons">
          <button onClick={() => removeDraft(id, setState, dispatch)}>
            Yes
          </button>
          <button onClick={() => closeRemoverCard("card_overlay", id)}>
            No
          </button>
        </div>
      </ConfirmationCard>
    </>
  );
};
