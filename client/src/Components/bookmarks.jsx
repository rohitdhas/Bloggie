import { Page, BlogPost } from "../Styles/homeStyles";
import { testBlog } from "./home";
import { useState } from "react";

export default function Bookmarks() {
  const [blogs, setBlogs] = useState([testBlog]);

  return (
    <Page>
      <h1>Bookmarks</h1>
      {!blogs.length ? (
        <h1>Nothing to Show Here!</h1>
      ) : (
        blogs.map((blog) => {
          return (
            <BlogPost>
              <div className="blog_title">
                <a href="#">{blog.title}</a>
              </div>
              <span>
                By <a href={`/profile/${blog.createdBy}`}>{blog.createdBy}</a>
              </span>
              <p className="snippit">
                Posted on {blog.datePosted} - {blog.markdown}...{" "}
                <a href="#">Read more</a>{" "}
              </p>
            </BlogPost>
          );
        })
      )}
    </Page>
  );
}
