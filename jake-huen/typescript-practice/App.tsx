import React from 'react';
import Post from './post'
import {v4} from 'uuid'

const dummyPosts=[
    {
        id:v4(),
        title:"제목1",
        createdAt:new Date(),
        body:'본문1',
    },
    {
        id:v4(),
        title:"제목2",
        createdAt:new Date(),
        body:'본문2',
    },
    {
        id:v4(),
        title:"제목3",
        createdAt:new Date(),
        body:'본문3',
    }
]

const App = ()=>{
    return <div>
        {dummyPosts.map(post=><Post title={post.title} body={post.body} createdAt={post.createdAt} />)}
    </div>
}
export default App;