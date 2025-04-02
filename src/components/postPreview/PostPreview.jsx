import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";
import { formatTimestamp } from "../../utilities/utils";
import Box from '@mui/material/Box';
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
            <CardContent>
                <h3>{post.title}</h3>
            </CardContent>
            {('preview' in post) 
            && 
            <Box sx={{
                backgroundImage: `url(${post.url_overridden_by_dest})`, 
                backgroundSize: 'cover',
                borderRadius: '32px'
            }}>
                <CardMedia 
                    component='img' 
                    image={post.url_overridden_by_dest} 
                    height='540' 
                    alt={`r/${post.subreddit}`} 
                    sx={{
                        objectFit: 'contain', 
                        backdropFilter:'blur(32px)',
                        borderRadius: '32px'
                    }}
                />
            </Box>}
            <CardActions>
                <CounterChips likeCount={post.ups} commentCount={post.num_comments} />
            </CardActions>
        </Card>
    );
};

export default PostPreview;