import { getLikes, getPosts } from "../store/index.js"
import { Post } from "./Post.js"

export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getLikes()
    let htmlStringOfAllPosts = ""

    for (const post of allPosts) {
        post.favorite = !!userLikes.find(like =>
            like.userId === parseInt(localStorage.getItem("gg_user")) &&
            like.postId === post.id
        )
        const htmlRepresentationOfThisPost = Post()
        htmlStringOfAllPosts += htmlRepresentationOfThisPost
    }

    return htmlStringOfAllPosts
}