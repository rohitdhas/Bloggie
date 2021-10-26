import { Page, TopBar, Toolbar, EditSection } from "../Styles/editorStyles";
import { useEffect, useState, useRef } from "react";
import { putMarkdown, md, postBlog } from "../Helper/editorFunctions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Prompt } from "react-router";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const coverImg = useRef("");
  const snippit = useRef("");
  const params = useParams();
  const { username } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Blog Editor";
    const draftId = params.id;

    // Populating draft in fields if draft id is present
    if (draftId) {
      fetch(`http://localhost:8080/blog?id=${draftId}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then(({ data }) => {
          if (data) {
            setTitle(data.title);
            setMarkdown(data.markdown);
            snippit.current.value = data.snippit;
            coverImg.current.value = data.coverImageUrl;
          }
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  useEffect(() => {
    // Render markup in previewer
    const previewer = document.getElementById("previewer");
    previewer.innerHTML = md.render(`# ${title}\n\n${markdown}`);
  }, [title, markdown]);

  return (
    <>
      {/* Show dialog box while leaving editor without saving */}
      <Prompt
        when={markdown || title ? true : false}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <Page>
        <TopBar>
          <div className="editor_title">Blog Editor</div>
          <div className="buttons">
            <button
              onClick={() => {
                postBlog(
                  title,
                  snippit.current.value,
                  markdown,
                  coverImg.current.value,
                  username,
                  false,
                  dispatch
                );
              }}
            >
              <i className="fas fa-pencil-ruler"></i>
              Save to Drafts
            </button>
            <button
              onClick={() => {
                postBlog(
                  title,
                  snippit.current.value,
                  markdown,
                  coverImg.current.value,
                  username,
                  true,
                  dispatch
                );
              }}
            >
              <i className="far fa-paper-plane"></i>
              Publish
            </button>
          </div>
        </TopBar>
        <Toolbar>
          <li>
            <i
              onClick={() => putMarkdown("heading", setMarkdown)}
              className="fas fa-heading"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("bold", setMarkdown)}
              className="fas fa-bold"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("italic", setMarkdown)}
              className="fas fa-italic"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("quote", setMarkdown)}
              className="fas fa-quote-left"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("code", setMarkdown)}
              className="fas fa-code"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("link", setMarkdown)}
              className="fas fa-link"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("image", setMarkdown)}
              className="fas fa-image"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("ul", setMarkdown)}
              className="fas fa-list"
            ></i>
          </li>
          <li>
            <i
              onClick={() => putMarkdown("ol", setMarkdown)}
              className="fas fa-list-ol"
            ></i>
          </li>
        </Toolbar>
        <div className="blog_data">
          <input
            type="text"
            placeholder="Cover Image Link (Optional)"
            ref={coverImg}
          />
          <input
            type="text"
            placeholder="Short Snippet for your blog"
            ref={snippit}
            required
          />
        </div>
        <EditSection>
          <div id="editor">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              value={title}
            />
            <textarea
              name="markdown"
              cols="30"
              rows="10"
              placeholder="Markdown Goes Here..."
              onChange={(e) => setMarkdown(e.target.value)}
              value={markdown}
            ></textarea>
          </div>
          <div id="previewer"></div>
        </EditSection>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.markdownguide.org/basic-syntax/"
        >
          <i className="far fa-question-circle help_icon"></i>
        </a>
      </Page>
    </>
  );
}
