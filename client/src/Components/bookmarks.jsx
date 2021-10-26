import { Page } from "../Styles/homeStyles";
import { useEffect, useState } from "react";
import { getAndSet, toggleLikesOrBookmarks } from "../Helper/blogHandler";
import { Card } from "../Styles/bookmarkPageStyles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAndSet("bookmarks", setBlogs);
    document.title = "Bookmarks";
  }, []);

  return (
    <Page>
      <h2>Bookmarks</h2>
      {!blogs.length ? (
        <div className="page_status">Nothing to show here</div>
      ) : (
        blogs.map((blog) => {
          return <BookmarkCard key={blog._id} blog={blog} />;
        })
      )}
    </Page>
  );
}

const BookmarkCard = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <Card>
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
      <i
        className="fas fa-bookmark"
        onClick={(e) =>
          toggleLikesOrBookmarks(e, "bookmarks", blog._id, dispatch)
        }
      ></i>
    </Card>
  );
};
