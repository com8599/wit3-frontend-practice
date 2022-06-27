import React, { useState } from "react";
import { useEffect } from "react";
const Posts = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const initcommentData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId={post.id}"
      );
      const data = await response.json();
      setComments(data);
    };
    initcommentData();
    console.log(comments);
  }, [comments]);
  return (
    <article className="article">
      <h1 className="article-title">제목 : {post.title} </h1>
      <span className="article-body">내용 : {post.body}</span>
      <section>
        {comments &&
          comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>
                  <h2>댓글</h2>
                  <h3>
                    {comment.name} {comment.email}
                  </h3>
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
