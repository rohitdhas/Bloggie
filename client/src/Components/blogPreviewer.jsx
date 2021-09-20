import marked from "marked";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAndSet } from "../Helper/blogHandler";
import { Previewer, ActionsCard } from "../Styles/blogPreviewerStyles";

export default function BlogPreviewer() {
  const params = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const id = params.id;
    getAndSet(`blog?id=${id}`, setBlogData);
  }, []);

  return (
    <>
      <Previewer id="blog_previewer">
        {!Object.keys(blogData).length ? (
          <h1>Getting Data From Server!</h1>
        ) : (
          <div>
            <div className="blog_title">{blogData.title}</div>
            <img src={blogData.coverImage} alt="coverImage" />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: marked(blogData.markdown),
              }}
            ></div>
          </div>
        )}
      </Previewer>
    </>
  );
}

const BlogActionsCard = () => {
  return (
    <ActionsCard>
      <li>
        <i className="far fa-bookmark"></i>
      </li>
    </ActionsCard>
  );
};
