import React, { useState } from "react";
import { useEffect } from "react";
import "./post.css";
const Posts = ({ post }) => {
  const [comments, setComments] = useState([]);

  const initData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=${post.id}"
    );
  };

  useEffect(() => {}, [comments]);

  return (
    <article className="article">
      <h1 className="article-title">title : {post.title} </h1>
      <span className="article-body">content : {post.body}</span>
      <section>
        {comments.map((value) => {
          return (
            <div key={value.id}>
              <div>
                <h3>
                  {comments.name} {comments.email}
                </h3>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Posts;

//시멘틱 태그 -> 의미를 갖고 있는 태그
