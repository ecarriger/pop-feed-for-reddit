import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    
    return (
        <li>
            <div className="creditContainer" >
                <h4>r/{post.subreddit}</h4>
                <p>{post.created}</p>
            </div>
            {('preview' in post) && <img alt='Preview image' />}
            <h3>{post.title}</h3>
            <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
        </li>
    );
};

export default PostPreview;