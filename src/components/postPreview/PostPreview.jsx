import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import PostImage from "../postImage/PostImage";
import PostVideo from "../postVideo/PostVideo";
import PostLink from "../postLink/PostLink";
import PostSelfText from "../postSelfText/PostSelfText";
import CounterChips from "../counterChips/CounterChips";
import { convertMediaMetaDataToUrls, formatTimestamp } from "../../utilities/utils";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardActions from '@mui/material/CardActions';
import PostGallery from "../postGallery/PostGallery";

const PostPreview = ({postId}) => {
    
    const post = useSelector(selectPost(postId));
    const postCreated = formatTimestamp(Date.now() - post.created);
    let postBody;
    if(post.is_video === true) {
        postBody = <PostVideo title={post.title} videoUrl={post.secure_media.reddit_video.fallback_url} />;
    }
    else if(post.is_self === true) {
        postBody = <PostSelfText title={post.title} selfText={post.selftext} />;
    }
    else if(post.is_gallery === true) {
        postBody = <PostGallery 
            title={post.title} 
            imageUrls={convertMediaMetaDataToUrls(post.media_metadata)} 
            alt={`r/${post.subreddit}`} 
        />;
    }
    else if(post.post_hint === 'image') {
        postBody = <PostImage 
            title={post.title} 
            imageUrl={post.url} 
            alt={`r/${post.subreddit}`} 
        />;
    }
    else if(post.post_hint === 'link' || !(post.domain.includes('redd.it') || post.domain.includes('self.'))) {
        postBody = <PostLink 
            title={post.title} 
            linkUrl={post.url} 
            imgUrl={post.thumbnail} 
            alt={`r/${post.subreddit}`} />
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