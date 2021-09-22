import { Page } from "../Styles/homeStyles";
import { useEffect, useState } from "react";
import { getAndSet, removeBookmark } from "../Helper/blogHandler";
import { Card } from "../Styles/bookmarkPageStyles";

export default function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAndSet("bookmarks", setBlogs);
  }, []);

  return (
    <Page>
      <h2>Bookmarks</h2>
      {!blogs.length ? (
        <h1>Nothing to Show Here!</h1>
      ) : (
        blogs.map((blog) => {
          return <BookmarkCard blog={blog} setState={setBlogs} />;
        })
      )}
    </Page>
  );
}

const BookmarkCard = ({ blog, setState }) => {
  return (
    <Card>
      <section>
        <div className="blog_title">
          <a href={`/blog/${blog._id}`}>{blog.title}</a>
        </div>
        <p className="snippit">
          Posted on {blog.datePosted.split(", ")[0]} - {blog.snippit}...{" "}
          <a href={`/blog/${blog._id}`}>Read more</a>{" "}
        </p>
        <span>
          Blog by <a href={`/profile/${blog.writtenBy}`}>{blog.writtenBy}</a>
        </span>
      </section>
      <div className="img_container">
        <img src={blog.coverImageUrl} alt="cover" />
      </div>
      <i
        className="fas fa-bookmark"
        onClick={(e) => removeBookmark(e, blog._id, setState)}
      ></i>
    </Card>
  );
};
