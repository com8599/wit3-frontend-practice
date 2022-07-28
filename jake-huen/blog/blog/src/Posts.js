import React, { useState } from "react";
import { useEffect } from "react";
import "./Posts.css";
const Posts = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const initcommentData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      );
      const data = await response.json();
      setComments(data);
    };
    initcommentData();
    console.log(comments);
  }, []);
  return (
    <article className="article">
      <h1 className="article-title">[ {post.title} ]</h1>
      <span className="article-body">CONTENTS : {post.body}</span>
      <h3 className="comment-title">[comments]</h3>
      <section>
        {comments &&
          comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>
                  <h5>
                    {comment.name} {comment.email}
                  </h5>
                  <span>{comment.body}</span>
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
};

export default Posts;
