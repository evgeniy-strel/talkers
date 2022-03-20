import { rerenderEntireTree } from "../render";

let state =  {
    posts: [
        {message: "Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост!", countLikes: 5},
        {message: "Это мой второй пост! Это мой второй пост! Это мой второй пост! Это мой второй пост!", countLikes: 6},
        {message: "Это мой третий пост!", countLikes: 3},
        {message: "Это мой четвертый пост!", countLikes: 4}
    ],
    addNewPost: (postMessage) => {
        let newPost = {
            message: postMessage,
            countLikes: 0
        }
        state.posts.push(newPost);
        rerenderEntireTree();
    }
}

export default state;