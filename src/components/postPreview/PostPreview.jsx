import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import PostImage from "../postImage/PostImage";
import PostVideo from "../postVideo/PostVideo";
import PostLink from "../postLink/PostLink";
import PostSelfText from "../postSelfText/PostSelfText";
import CounterChips from "../counterChips/CounterChips";
import { formatTimestamp } from "../../utilities/utils";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardActions from '@mui/material/CardActions';

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const postCreated = formatTimestamp(Date.now() - post.created);
    const postType = post.post_hint ? post.post_hint : 'self';
    let postBody;
    switch (postType) {
        case 'self':
            postBody = <PostSelfText title={post.title} selfText={post.selftext} />
            break;
        case 'image':
            postBody = <PostImage 
                title={post.title} 
                imageUrl={post.url_overridden_by_dest} 
                alt={`r/${post.subreddit}`} />;
            break;
        case 'link':
            postBody = <PostLink 
                title={post.title} 
                linkUrl={post.url_overridden_by_dest} 
                imgUrl={post.thumbnail} 
                alt={`r/${post.subreddit}`} />
            break;
        case 'hosted:video':
            postBody = <PostVideo />;
            break;
    }

    return (
        <Card>
            <CardHeader subheader={`r/${post.subreddit} • ${postCreated}`} />
                {postBody}
            <CardActions>
                <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
            </CardActions>
        </Card>
    );
};

export default PostPreview;