import React from 'react';

interface PostProps {
    title:string;
    createdAt:Date;
    body:String;
}


const Post = ({title,createdAt,body}:PostProps) =>{

    const createdAt = Date.time()

    return <div>
        <h1>{title}</h1>
        <span>{createdAt}</span>
        <span>{body}</span>
    </div>
}

export default Post;