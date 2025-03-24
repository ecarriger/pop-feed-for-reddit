import Post from "../../../components/post/Post"
import CommentsSection from "../../comments/Comments";


const PostPage = () => {
    return(
        <>
            <h2>PostPage</h2>
            <Post />
            <Comments />
        </>
    );
}
export default PostPage;