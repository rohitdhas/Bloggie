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

  return (
    <div>
      <h1>Feed</h1>
    </div>
  );
}
