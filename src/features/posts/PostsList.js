import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

export const PostsList = () => {
    /*
    ReduxStoreに接続するためにuseSelectorを設定する
    */
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => {
        console.log("PostsList")
        return(<article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0,100)}</p>
            <Link to={'/post/${post.id}'} className="button muted-button">
                View Post
            </Link>
        </article>)
    })

    return(
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}