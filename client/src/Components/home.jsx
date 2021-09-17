import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/getUser", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  function logout() {
    fetch("http://localhost:8080/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) {
          setData({});
        }
      });
  }

  return (
    <div>
      {!data ? (
        <h1>
          <a href="/login">Click Here</a> to Login!
        </h1>
      ) : (
        <>
          <h1>Hello, {data.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}
