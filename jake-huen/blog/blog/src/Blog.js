import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import "./Blog.css";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const initpostData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    initpostData();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="article">
            <Posts post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
