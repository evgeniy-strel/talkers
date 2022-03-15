import postAva from './../../../../img/icons/ava.png'

const Post = (props) => {
    return (
        <div className="post">
            <div className='post_img_message'>
                <div className='post_ava'>
                    <img src={postAva} width="50" className="post_ava_img"/>
                </div>
                <div className='post_message'>
                    <p>{props.message}</p>
                </div>
            </div>
            <div className='post_count_likes'>
                <p>Likes: {props.countLikes}</p>
            </div>
        </div>
    )
}

export default Post;