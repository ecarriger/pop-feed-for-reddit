import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";


const Post = ({postId}) => {

    const post = useSelector(selectPost(postId));

    return (
        <>
            <h2>Post</h2>
            <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
        </>
    );
};

export default Post;