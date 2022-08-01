const Post = ({post}) => {
    return (
    <article>
        <h1>title : {post.title}</h1>
        <span>content : {post.body}</span>
    </article>
    );
};

export default Post;