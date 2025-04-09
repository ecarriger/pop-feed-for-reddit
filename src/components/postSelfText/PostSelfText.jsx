import PostTitle from '../postTitle/PostTitle';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostSelfText = ({title, selfText}) => {
    return (
        <CardContent>
            <PostTitle title={title} />
            <Typography>{selfText}</Typography>
        </CardContent>
    )
};

export default PostSelfText;