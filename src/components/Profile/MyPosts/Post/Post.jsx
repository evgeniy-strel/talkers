import postAva from './../../../../img/icons/ava.png'

const Post = (props) => {
    return (
        <div className="post">
            <div className='post_sender_message'>
                <div className='post_sender'>
                    <div className='post_sender_ava'>
                        <img src={postAva} width="35" className="post_ava_img"/>
                    </div>
                    <div className='post_sender_info'>
                        <div className='post_sender_info_name'>Гарри Поттер</div>
                        <div className='post_sender_info_date'>Сегодня в 11:55</div>
                    </div>
                </div>
                <div className='post_message'>
                    <p>{props.message}</p>
                </div>
            </div>
            <div className='post_count_likes'>
                <p><span>Likes:</span> {props.countLikes}</p>
            </div>
        </div>
    )
}

export default Post;