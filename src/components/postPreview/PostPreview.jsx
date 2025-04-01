import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";
import { formatTimestamp } from "../../utilities/utils";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const timeStamp = Date.now() - post.created;
    const postCreated = formatTimestamp(timeStamp);

    return (
        <Card>
            <CardHeader title={`r/${post.subreddit}`} subheader={postCreated} />
            {('preview' in post) && <CardMedia component='img' image={post.url_overridden_by_dest} alt={`r/${post.subreddit}`} />}
            <CardContent>
                <h3>{post.title}</h3>
            </CardContent>
            <CardActions>
                <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
            </CardActions>
        </Card>
    );
};

export default PostPreview;