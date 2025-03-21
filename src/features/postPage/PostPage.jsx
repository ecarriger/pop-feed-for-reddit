import Post from "../../components/post/Post";
import CommentsSection from "../commentsSection/CommentsSection";


const PostPage = () => {
    return(
        <>
            <h2>PostPage</h2>
            <Post />
            <CommentsSection />
        </>
    );
}
export default PostPage;