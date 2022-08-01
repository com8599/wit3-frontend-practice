import { useState, useEffect } from "react";
import Post from "./Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      setPosts(data);
    };

    initData();

  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
  <div>
    {posts.map((post) => {
      return <Post post={post} key={post.id} />;
    })}
  </div>
  );
}
