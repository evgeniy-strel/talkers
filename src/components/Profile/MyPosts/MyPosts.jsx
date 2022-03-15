import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div>
            <h3>Мои посты</h3>
            <textarea></textarea><br />
            <button>Добавить</button><br />
            {props.posts.map(post => <Post message={post.message} countLikes={post.countLikes} />)}
        </div>
    )
}

export default MyPosts;