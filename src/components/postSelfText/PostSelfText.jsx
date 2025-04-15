import PostTitle from '../postTitle/PostTitle';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostSelfText = ({title, selfText}) => {
    return (
        <CardContent>
            <PostTitle title={title} />
            <Typography sx={{maxHeight: '9rem', overflow: 'hidden', textOverflow: 'ellipsis', }}>{selfText}</Typography>
        </CardContent>
    )
};

export default PostSelfText;