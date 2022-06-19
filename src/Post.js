import { useState } from "react";
import { useEffect } from "react";
import "./post.css";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const initData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      );
      const data = await response.json();
      setComments(data);
    };
    initData();
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <article className="article">
      <hr />
      <h2 className="article-title">title : {post.title}</h2>
      <h4 className="article-userId">userId : {post.userId}</h4>
      <div className="article-content">content : {post.body}</div>
      <section>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h3>
                ㄴ name : {comment.name} | email : {comment.email}
              </h3>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Post;
