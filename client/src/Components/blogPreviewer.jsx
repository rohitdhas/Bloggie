import { md } from "../Helper/editorFunctions";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAndSet, toggleLikesOrBookmarks } from "../Helper/blogHandler";
import { Previewer, ActionsCard } from "../Styles/blogPreviewerStyles";
import { useSelector, useDispatch } from "react-redux";

export default function BlogPreviewer() {
  const params = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const id = params.id;
    getAndSet(`blog?id=${id}`, setBlogData);
    document.title = "Reading Blog";
  }, []);

  useEffect(() => {
    const previewer = document.querySelector(".markdown");
    if (previewer) {
      previewer.innerHTML = md.render(`${blogData.markdown}`);
    }
  }, [blogData]);

  return (
    <>
      <Previewer id="blog_previewer">
        {!Object.keys(blogData).length ? (
          <div className="page_status">Loading Blog...</div>
        ) : (
          <div>
            <div className="blog_title">{blogData.title}</div>
            {!blogData.coverImageUrl ? null : (
              <img src={blogData.coverImageUrl} alt="coverImage" />
            )}

            <div className="markdown"></div>
          </div>
        )}
      </Previewer>
      <BlogActionsCard blogData={blogData} setState={setBlogData} />
    </>
  );
}

const BlogActionsCard = ({ blogData, setState }) => {
  const { username } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  return (
    <>
      {!Object.keys(blogData).length ? null : (
        <ActionsCard>
          <div className="writer_info">
            Blog by -{" "}
            <a href={`/profile/${blogData.writtenBy}`}>
              <strong>{blogData.writtenBy}</strong>
            </a>
          </div>
          <div className="icons">
            {blogData.bookmarkedBy.includes(username) ? (
              <li>
                <i
                  onClick={(e) =>
                    toggleLikesOrBookmarks(
                      e,
                      "bookmarks",
                      blogData._id,
                      dispatch
                    )
                  }
                  className="fas fa-bookmark"
                ></i>
                <strong>{blogData.bookmarkedBy.length}</strong>
              </li>
            ) : (
              <li>
                <i
                  onClick={(e) =>
                    toggleLikesOrBookmarks(
                      e,
                      "bookmarks",
                      blogData._id,
                      dispatch
                    )
                  }
                  className="far fa-bookmark"
                ></i>
                <strong>{blogData.bookmarkedBy.length}</strong>
              </li>
            )}
            {blogData.likedBy.includes(username) ? (
              <li>
                <i
                  onClick={(e) =>
                    toggleLikesOrBookmarks(e, "likes", blogData._id, dispatch)
                  }
                  className="fas fa-heart"
                ></i>
                <strong>{blogData.likedBy.length}</strong>
              </li>
            ) : (
              <li>
                <i
                  onClick={(e) =>
                    toggleLikesOrBookmarks(e, "likes", blogData._id, dispatch)
                  }
                  className="far fa-heart"
                ></i>
                <strong>{blogData.likedBy.length}</strong>
              </li>
            )}
          </div>
        </ActionsCard>
      )}
    </>
  );
};
