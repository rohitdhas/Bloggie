import { useParams, useLocation } from "react-router";
import { UserProfile, UserInfo, PostData } from "../Styles/profileStyles";
import { getProfile, removePost } from "../Helper/userProfileHandler";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Overlay, ConfirmationCard } from "../Styles/draftPageStyles";
import { openRemoverCard, closeRemoverCard } from "../Helper/toggler";

export default function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState({});
  const { username } = useSelector((state) => state.userProfile);
  const [permession, setPermession] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const profileUsername = params.username;

    getProfile(profileUsername, setProfile, dispatch);
  }, [location.pathname, dispatch]);

  useEffect(() => {
    const profileUsername = params.username;

    setPermession(username === profileUsername);
    document.title = `${profileUsername}'s Profile`;
  }, [profile, username]);

  return (
    <UserProfile>
      <h2 className="page_title">User Profile</h2>
      {!profile.username ? (
        <div className="page_status">Loading Profile</div>
      ) : (
        <>
          <UserInfo>
            <img src={profile.profileImage} alt="profile_pic" />
            <span>
              <div className="profile_name">{profile.name}</div>
              <div className="profile_username">@{profile.username}</div>
            </span>
          </UserInfo>
          <div className="data_table">
            <h2>Your Blog Posts</h2>
            <PostData>
              {!profile.blogs.length ? (
                <thead>
                  <tr className="message">
                    <td>No Blogs Found!</td>
                  </tr>
                </thead>
              ) : (
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Likes</th>
                    <th>Bookmarks</th>
                    <th>Date Posted</th>
                    {!permession ? null : (
                      <>
                        <th>Edit</th>
                        <th>Delete</th>
                      </>
                    )}
                  </tr>
                  {profile.blogs.map((blog) => {
                    return (
                      <tr key={blog._id}>
                        <td>
                          <a href={`/blog/${blog._id}`}>{blog.title}</a>
                        </td>
                        <td>{blog.likedBy.length}</td>
                        <td>{blog.bookmarkedBy.length}</td>
                        <td>{blog.datePosted}</td>
                        {!permession ? null : (
                          <>
                            <td>
                              <button
                                onClick={() =>
                                  (window.location.pathname = `/editor/draft/${blog._id}`)
                                }
                                className="edit_btn"
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                className="remove_btn"
                                onClick={() =>
                                  openRemoverCard("card_overlay", blog._id)
                                }
                              >
                                Remove
                              </button>
                            </td>
                          </>
                        )}
                        <ConfirmRemove
                          id={blog._id}
                          setState={setProfile}
                          username={username}
                          dispatch={dispatch}
                        />
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </PostData>
          </div>
        </>
      )}
    </UserProfile>
  );
}

const ConfirmRemove = ({ id, setState, username, dispatch }) => {
  return (
    <>
      <Overlay className="card_overlay" />
      <ConfirmationCard className="card" id={id}>
        <p>Are You Sure?</p>
        <div className="buttons">
          <button onClick={() => removePost(id, username, setState, dispatch)}>
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
