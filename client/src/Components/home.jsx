import { useState, useEffect } from "react";
import { Page, BlogPost } from "../Styles/homeStyles";

export const testBlog = {
  title: "My First Blog on Bloggie",
  datePosted: "18-09-21",
  createdBy: "rohit",
  markdown:
    "Say, Hello to the revolutionary blogging platform ever created in the human history. Bloggie is the best bloggin platform in the world out there.",
};

export default function Home() {
  const [blogs, setBlogs] = useState([testBlog]);

  return (
    <Page>
      <h1>Your Feed</h1>
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
