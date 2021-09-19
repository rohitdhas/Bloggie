import { useState, useEffect } from "react";
import { Page, BlogPost } from "../Styles/homeStyles";
import { getAndSet } from "../Helper/blogHandler";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAndSet("blogs", setBlogs);
  }, []);

  return (
    <Page>
      <h2>My Feed</h2>
      {!blogs.length ? (
        <h1>Nothing to Show Here!</h1>
      ) : (
        blogs.map((blog) => {
          return <BlogCard blog={blog} />;
        })
      )}
    </Page>
  );
}

const BlogCard = ({ blog }) => {
  return (
    <BlogPost>
      <section>
        <div className="blog_title">
          <a href="#">{blog.title}</a>
        </div>
        <p className="snippit">
          Posted on {blog.datePosted.split(", ")[0]} - {blog.snippit}...{" "}
          <a href="#">Read more</a>{" "}
        </p>
        <span>
          Blog by <a href={`/profile/${blog.writtenBy}`}>{blog.writtenBy}</a>
        </span>
      </section>
      <img src={blog.coverImage} alt="cover" />
    </BlogPost>
  );
};
