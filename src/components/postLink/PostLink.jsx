import PostTitle from "../postTitle/PostTitle";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";

const PostLink = ({title, linkUrl, imgUrl, alt}) => {
    return (
        <CardContent sx={{display: 'flex'}} >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <PostTitle title={title} />
                <Link href={linkUrl}>{linkUrl}</Link>
            </Box>
            {imgUrl !== 'default' && <CardMedia image={imgUrl} component='img' alt={alt} sx={{height: 'auto', width: 'auto'}} />}
        </CardContent> 
    );
};

export default PostLink;