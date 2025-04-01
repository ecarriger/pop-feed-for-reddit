import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";
import { formatTimestamp } from "../../utilities/utils";

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const timeStamp = Date.now() - post.created;
    const postCreated = formatTimestamp(timeStamp);

    return (
        <li>
            <div className="creditContainer" >
                <h4>r/{post.subreddit}</h4>
                <p>{postCreated}</p>
            </div>
            {('preview' in post) && <img alt={`r/${post.subreddit} - ${post.title}`} />}
            <h3>{post.title}</h3>
            <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
        </li>
    );
};

export default PostPreview;