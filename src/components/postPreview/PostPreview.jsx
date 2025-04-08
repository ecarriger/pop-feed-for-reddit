import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import PostImage from "../postImage/PostImage";
import PostVideo from "../postVideo/PostVideo";
import CounterChips from "../counterChips/CounterChips";
import { formatTimestamp } from "../../utilities/utils";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const postCreated = formatTimestamp(Date.now() - post.created);
    const postType = post.post_hint;
    let postBody;
    switch (postType) {
        case 'self':
            postBody = <Typography>{post.selftext}</Typography>;
            break;
        case 'image':
            postBody = <PostImage imageUrl={post.url_overridden_by_dest} alt={`r/${post.subreddit}`} />;
            break;
        case 'link':
            postBody = <Typography>{post.url_overridden_by_dest}</Typography>;
            break;
        case 'hosted:video':
            postBody = <PostVideo />;
            break;
    }

    return (
        <Card>
            <CardHeader subheader={`r/${post.subreddit} • ${postCreated}`} />
            <CardContent>
                <Typography>{post.title}</Typography>
                {postBody}
            </CardContent>
            <CardActions>
                <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
            </CardActions>
        </Card>
    );
};

export default PostPreview;