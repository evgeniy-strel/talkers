import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPost = React.createRef();


    
    const addPost = () => {
        let text = newPost.current.value;
        props.state.addNewPost(text);
    }

    return (
        <div className="my_posts">
            <h3>Мои посты</h3>
            <textarea ref={newPost}></textarea><br />
            <button onClick={addPost}>Добавить</button><br />
            {props.state.posts.map(post => <Post message={post.message} countLikes={post.countLikes} />)}
        </div>
    )
}

export default MyPosts;