import { useState, useEffect } from "react";
import { Page, BlogPost } from "../Styles/homeStyles";
import { getAndSet } from "../Helper/blogHandler";
import { Link } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAndSet("blogs", setBlogs);
    document.title = "Home";
  }, []);

  return (
    <Page>
      <h2>My Feed</h2>
      {!blogs.length ? (
        <div className="page_status">Nothing to show here</div>
      ) : (
        blogs.map((blog) => {
          return <BlogCard key={blog._id} blog={blog} />;
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
          <a href={`/blog/${blog._id}`}>{blog.title}</a>
        </div>
        <p className="snippit">
          Posted on {blog.datePosted.split(", ")[0]} -{" "}
          {blog.snippit.split(" ").slice(0, 20).join(" ")}...{" "}
          <a href={`/blog/${blog._id}`}>Read more</a>{" "}
        </p>
        <span>
          Blog by -{" "}
          <strong>
            <Link to={`/profile/${blog.writtenBy}`}>{blog.writtenBy}</Link>
          </strong>
        </span>
      </section>
      <div className="img_container">
        <img src={blog.coverImageUrl} alt="cover" />
      </div>
    </BlogPost>
  );
};
