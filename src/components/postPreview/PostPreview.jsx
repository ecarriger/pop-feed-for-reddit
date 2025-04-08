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
import Typography from "@mui/material/Typography";

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const postCreated = formatTimestamp(Date.now() - post.created);
    const mediaPresent = ('url_overridden_by_dest' in post);

    return (
        <Card>
            <CardHeader subheader={`r/${post.subreddit} • ${postCreated}`} />
            <CardContent>
                <Typography>{post.title}</Typography>
                {!mediaPresent && <Typography>{post.selftext}</Typography>}
            </CardContent>
            {mediaPresent 
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